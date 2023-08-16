from rest_framework import serializers
from .models import TipoInsumo

class TipoInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoInsumo
        fields = '__all__'