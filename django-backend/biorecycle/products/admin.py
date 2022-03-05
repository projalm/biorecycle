from django.contrib import admin
from .models import Product, Category, Wallet

# Register your models here.

admin.site.register(Category)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'image', 'points')


@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'points')
