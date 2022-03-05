from django.urls import path
from .views import product_list, category_list, product_unique, TradePointForBenefitsView

urlpatterns = [
    path('products/', product_list, name='products'),
    path('products/<str:pk>/', product_unique, name='product'),
    path('categories/', category_list),
    path('trade/', TradePointForBenefitsView.as_view()),

]