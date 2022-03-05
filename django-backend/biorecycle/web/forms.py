from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class LoginForm(forms.Form):
    email = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Enter your Email'
            }
        )
    )
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'placeholder': 'Enter your password'
            }
        )
    )


# class RegisterForm(forms.Form):
class RegisterForm(UserCreationForm):
    email = forms.CharField(
        widget=forms.EmailInput(
            attrs={
                'placeholder': 'Email'
            }
        )
    )
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Nombre de usuario'
            }
        )
    )
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'placeholder': 'Clave'
            }
        )
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                'placeholder': 'Repita la Clave'
            }
        )
    )
    name = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Nombre'
            }
        )
    )
    last_name = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Apellido'
            }
        )
    )
    phone_number = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Coloque su numero de telefono'
            }
        )
    )
    address = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Coloque su direccion'
            }
        )
    )

    class Meta:
        model = User
        fields = ('email', 'username', 'password1', 'password2', 'name', 'last_name', 'phone_number', 'address')
