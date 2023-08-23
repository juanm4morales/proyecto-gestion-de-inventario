from rest_framework import viewsets
from . import serializer
from . import models

class CustomModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['post', 'get', 'put']

class TipoInsumoCRUD(CustomModelViewSet):
    serializer_class = serializer.TipoInsumoSerializer
    queryset = models.TipoInsumo.objects.all()

class InsumoCRUD(CustomModelViewSet):
    serializer_class = serializer.InsumoSerializer
    queryset = models.Insumo.objects.all()

class TipoHerramientaCRUD(CustomModelViewSet):
    serializer_class = serializer.TipoHerramientaSerializer
    queryset = models.TipoHerramienta.objects.all()

class HerramientaCRUD(CustomModelViewSet):
    serializer_class = serializer.HerramientaSerializer
    queryset = models.Herramienta.objects.all()

class OrdenRetiroCRUD(CustomModelViewSet):
    serializer_class = serializer.OrdenRetiroSerializer
    queryset = models.OrdenRetiro.objects.all()

class AjusteStockCRUD(CustomModelViewSet):
    serializer_class = serializer.AjusteStockSerializer
    queryset = models.AjusteStock.objects.all()

class EstadoHerramientaCRUD(CustomModelViewSet):
    serializer_class = serializer.EstadoHerramientaSerializer
    queryset = models.EstadoHerramienta.objects.all()
