from django.urls import path, include
from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'tipoinsumo', views.TipoInsumoCRUD, 'tipoinsumo')
router.register(r'insumo', views.InsumoCRUD, 'insumo')
router.register(r'tipoherramienta', views.TipoHerramientaCRUD, 'tipoherramienta')
router.register(r'herramienta', views.HerramientaCRUD, 'herramienta')
router.register(r'ordenretiro', views.OrdenRetiroCRUD, 'ordenretiro')
router.register(r'ajustestock', views.AjusteStockCRUD, 'ajustestock')
router.register(r'estadoherramienta', views.EstadoHerramientaCRUD, 'estadoherramienta')

urlpatterns = [
    path('', include(router.urls)),
]
