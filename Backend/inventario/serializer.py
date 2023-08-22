from rest_framework import serializers
from . import models

class TipoInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TipoInsumo
        fields = '__all__'

class InsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Insumo
        fields = '__all__'

class TipoHerramientaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TipoHerramienta
        fields = '__all__'

class HerramientaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Herramienta
        fields = '__all__'


class OrdenRetiroSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrdenRetiro
        fields = '__all__'

class AjusteStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AjusteStock
        fields = '__all__'

class EstadoHerramientaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EstadoHerramienta
        fields = '__all__'
