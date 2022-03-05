from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from accounts.models import Account


class AuthCustomTokenSerializer(serializers.Serializer):
    email = serializers.CharField(
        write_only=True
    )
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        read_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                username=email, password=password)

            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')

            if not user.is_active:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')

        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')
            # raise serializers.ValidationError({
            #     'address': _('Another user has already been registered under this address.')
            # })

        attrs['user'] = user
        return attrs

class RegisterCustomSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, )
    username = serializers.CharField(required=True, )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password], )
    password2 = serializers.CharField(write_only=True, required=True, validators=[validate_password], )
    token = serializers.CharField(read_only=True, )

    def validate_email(self, value):
        if Account.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError({'email': 'Email exist!'})

        return value.lower()

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password': 'Password fields didn't match"})

        return attrs

    def validate_username(self, username):
        if Account.objects.filter(username__iexact=username).exists():
            raise serializers.ValidationError({'username': 'Username exist!'})
        return username


    def create(self, validated_data):
        user = Account.objects.create(email=validated_data['email'],
                                      username=validated_data['username'],
                                      name=validated_data['name'],
                                      last_name=validated_data['last_name'],
                                      second_last_name=validated_data['second_last_name'],
                                      dni=validated_data['dni'],
                                      city=validated_data['city'],
                                      address=validated_data['address'],
                                      phone=validated_data['phone'], )
        user.set_password(validated_data['password'])
        user.save()

        token, created = Token.objects.get_or_create(user=user)
        user.token = token
        return user

    class Meta:
        model = Account
        fields = ('email', 'name', 'last_name', 'second_last_name', 'username', 'password', 'password2', 'dni', 'city',
                  'address', 'phone', 'token', )