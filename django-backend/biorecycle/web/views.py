from django.contrib.auth import authenticate, login as session_start
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.contrib import messages

# Create your views here.
from web.forms import LoginForm, RegisterForm


def index(request):
    context = {}
    context['segment'] = 'home'

    # data = {
    #     'segment': 'index',
    #     'products': products,
    #     'testimonies': testimonies
    # }

    html_template = loader.get_template('home.html')
    return HttpResponse(html_template.render(context, request))


# Create your views here.
def login(request):
    context = {}

    form = LoginForm(request.POST or None)  #
    msg = ''

    if request.method == 'POST':
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')

            user = authenticate(email=email, password=password)

            if user is not None:
                session_start(request, user)
                return redirect('/')
            else:
                msg = 'Error Login'

    context['msg'] = msg
    context['form'] = form

    # html_template = loader.get_template('login.html')
    # return HttpResponse(html_template.render(context, request))
    return render(request, 'login.html', context)


def register(request):
    context = {}
    form = RegisterForm(request.POST or None)
    msg = ''

    if request.method == 'POST':
        if form.is_valid():
            user = form.save()
            session_start(request, user)
            return redirect('/')
        else:
            messages.error(request, 'Hay errores en el codigo')  # ==> message global de django
            msg = 'Corriga sus campos hay errores'  ## ==> message personzalido

    context['form'] = form
    context['msg'] = msg
    return render(request, 'register.html', context)