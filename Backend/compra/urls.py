from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from compra import views

router = routers.DefaultRouter()
router.register(r'pedidosinsumo', views.PedidoInsumoCRUD, 'pedidosinsumo')
router.register(r'presupuestos', views.PresupuestoCRUD, 'presupuestos')
router.register(r'detallepedidos', views.DetallePedidoCRUD, 'detallepedidos')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Compra API')),
]
