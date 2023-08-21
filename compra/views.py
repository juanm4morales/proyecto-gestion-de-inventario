from rest_framework import viewsets
from . import serializer
from . import models

class PedidoInsumoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.PedidoInsumoSerializer
    queryset = models.PedidoInsumo.objects.all()

class PresupuestoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.PresupuestoSerializer
    queryset = models.Presupuesto.objects.all()

class DetallePedidoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.DetallePedidoSerializer
    queryset = models.DetallePedido.objects.all()
