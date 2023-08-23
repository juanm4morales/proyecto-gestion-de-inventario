from django.urls import path, include
from rest_framework import routers
from usuario import views

router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioCRUD, 'usuario')

urlpatterns = [
    path('', include(router.urls)),
]
