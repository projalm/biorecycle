from django.urls import path

from auth.views import CustomCreateUser, CustomAuthToken

urlpatterns = [
    path('signup/', CustomCreateUser.as_view()),
    path('login/', CustomAuthToken.as_view())
]