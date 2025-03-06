from django.urls import path
from .views import *

urlpatterns = [
    path('',EventView.as_view()),
    path('<int:pk>',EventView.as_view()),

]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)