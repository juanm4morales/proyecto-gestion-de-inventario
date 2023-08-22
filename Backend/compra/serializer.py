from rest_framework import serializers
from . import models

class PedidoInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PedidoInsumo
        fields = '__all__'

class PresupuestoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Presupuesto
        fields = '__all__'

class DetallePedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DetallePedido
        fields = '__all__'
