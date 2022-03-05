from django.contrib.auth.base_user import BaseUserManager

# class MyAccountManager(BaseUserManager):
#     use_in_migrations = True
#
#     def create_user(self, email, username, name, last_name, password=None):
#         if not email:
#             raise ValueError("El usuario debe tener un correo valido")
#         if not username:
#             raise ValueError('No ha colocado nombre de usuario o el que coloco no es valido')
#         if not name:
#             raise ValueError('Debe llenar la casilla Nombre')
#         if not last_name:
#             raise ValueError('Debe llenar la casilla Apellido')
#         email = self.normalize_email(email)
#         user = self.model(email=email, name=name)
#
#         user.set_password(password)
#         user.save(using=self._db)
#
#         return user
#
#     def create_superuser(self, email, username, password, name, last_name):
#         user = self.create_user(email, name, last_name, username, password )
#
#         user.is_superuser = True
#         user.is_admin = True
#         user.is_staff = True
#         user.save(using=self._db)
#
#         return user


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email),
                          **extra_fields)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_active', True)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_admin', True)

        # magia

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)