from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductModelSerializer, CategoryModelSerializer, PointsSerializer
from ..models import Product, Category, Wallet


@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        qs = Product.objects.all()
        serializer = ProductModelSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductModelSerializer(data=request.data)
        if serializer.is_valid():
            # add logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def product_unique(request, pk):
    if request.method == 'GET':
        qs = Product.objects.get(id=pk)
        serializer = ProductModelSerializer(qs, many=False)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        qs = Category.objects.all()
        serializer = CategoryModelSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategoryModelSerializer(data=request.data)
        if serializer.is_valid():
            # add logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def category_list(request, pk):
    if request.method == 'GET':
        qs = Category.objects.get(id=pk)
        serializer = CategoryModelSerializer(qs, many=False)
        return Response(serializer.data)


from rest_framework.views import APIView


# CAPTURAR PARAMETROS
# MANUAL
# SERIALIZADORES

class TradePointForBenefitsView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)

        if 'user' not in request.data:
            return Response({'User is required'}, status=status.HTTP_400_BAD_REQUEST)

        if 'product' not in request.data:
            return Response({'Product is required'}, status=status.HTTP_400_BAD_REQUEST)

        user_pk = request.data.get('user')
        product_pk = request.data.get('product')

        point = Wallet.objects.filter(user__pk=user_pk).first()
        product = Product.objects.filter(pk=product_pk).first()

        if product.points <= point.points:
            print('si le alcanza')

            # Falta tabla de productos del usuario
            # producto -> usuario

            new_point = point.points - product.points
            point.points = new_point
            serializer = PointsSerializer(data=point)
            return Response(serializer.data, status=status.HTTP_200_OK)

        else:
            return Response({'Puntos insuficientes'}, status=status.HTTP_400_BAD_REQUEST)
