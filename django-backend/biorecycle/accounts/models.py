from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, UserManager
from django.contrib.auth.models import PermissionsMixin



class Account(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True, blank=False)
    username = models.CharField(max_length=100, unique=True, blank=False)
    name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=False)
    second_last_name = models.CharField(max_length=100, blank=False)
    dni = models.IntegerField(blank=False, unique=True)
    city = models.IntegerField(blank=False)
    address = models.CharField(max_length=255, blank=False)
    phone = models.IntegerField(blank=False, unique=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'last_name', 'username', 'second_last_name', 'dni', 'city', 'phone', 'address']

    def __str__(self):
        return self.email

