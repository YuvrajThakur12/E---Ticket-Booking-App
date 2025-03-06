from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',UserView.as_view()),
    path('login/',LoginView.as_view()),
    # path('users/',getUser.as_view()),
]
