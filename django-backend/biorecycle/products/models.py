from collections import deque

from django.db import models

from accounts.models import Account


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    image = models.ImageField(upload_to='products/images', null=True, blank=True)
    points = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Wallet(models.Model):
    points = models.IntegerField(default=0)
    user = models.OneToOneField(Account, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Punto'
        verbose_name_plural = 'Puntos'



