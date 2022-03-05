from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductModelSerializer, CategoryModelSerializer
from ..models import Product, Category


@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        qs = Product.objects.all()
        serializer = ProductModelSerializer(qs, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductModelSerializer(data=request.data)
        if serializer.is_valid():
            #add logic
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
            #add logic
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def category_list(request, pk):
    if request.method == 'GET':
        qs = Category.objects.get(id=pk)
        serializer = CategoryModelSerializer(qs, many=False)
        return Response(serializer.data)