from rest_framework import serializers
from ..models import Product, Category, Wallet


class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ProductModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'image']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'last_name', 'username', 'second_last_name', 'dni', 'city', 'phone', 'address']


class PointsSerializer(serializers.ModelSerializer):
    user = UserSerializer

    class Meta:
        model = Wallet
        fields = ['id','points', 'user']


