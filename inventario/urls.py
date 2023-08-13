from django.contrib import admin
from django.urls import path, include

from rest_framework.documentation import include_docs_urls

from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'TipoInsumo', views.TipoInsumoCRUD, 'TipoInsumo')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/Doc/', include_docs_urls("TipoInsumo API"))
]
