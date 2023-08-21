from django.urls import path, include
from rest_framework import routers
from usuario import views

router = routers.DefaultRouter()
router.register(r'usuarios', views.UsuarioCRUD, 'usuarios')

urlpatterns = [
    path('', include(router.urls)),
]
