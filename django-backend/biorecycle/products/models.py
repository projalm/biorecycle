from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=255)
    image = models.ImageField(upload_to='products/images', null=True, blank=True)

    def __str__(self):
        return self.title
