from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'tiposinsumo', views.TipoInsumoCRUD, 'tiposinsumo')
router.register(r'insumos', views.InsumoCRUD, 'insumos')
router.register(r'tiposherramienta', views.TipoHerramientaCRUD, 'tiposherramienta')
router.register(r'herramientas', views.HerramientaCRUD, 'herramientas')
router.register(r'ordenesretiro', views.OrdenRetiroCRUD, 'ordenesretiro')
router.register(r'ajustesstock', views.AjusteStockCRUD, 'ajustesstock')
router.register(r'estadosherramienta', views.EstadoHerramientaCRUD, 'estadosherramienta')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Inventario API')),
]
