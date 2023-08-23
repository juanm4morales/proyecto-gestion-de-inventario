from rest_framework import viewsets
from . import serializer
from . import models

class CustomModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['post', 'get', 'put']

class PedidoInsumoCRUD(CustomModelViewSet):
    serializer_class = serializer.PedidoInsumoSerializer
    queryset = models.PedidoInsumo.objects.all()

class PresupuestoCRUD(CustomModelViewSet):
    serializer_class = serializer.PresupuestoSerializer
    queryset = models.Presupuesto.objects.all()

class DetallePedidoCRUD(CustomModelViewSet):
    serializer_class = serializer.DetallePedidoSerializer
    queryset = models.DetallePedido.objects.all()
