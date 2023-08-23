from django.urls import path, include
from rest_framework import routers
from compra import views

router = routers.DefaultRouter()
router.register(r'pedidoinsumo', views.PedidoInsumoCRUD, 'pedidoinsumo')
router.register(r'presupuesto', views.PresupuestoCRUD, 'presupuesto')
router.register(r'detallepedido', views.DetallePedidoCRUD, 'detallepedido')

urlpatterns = [
    path('', include(router.urls)),
]
