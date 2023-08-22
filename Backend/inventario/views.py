from rest_framework import viewsets
from . import serializer
from . import models

class TipoInsumoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.TipoInsumoSerializer
    queryset = models.TipoInsumo.objects.all()

class InsumoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.InsumoSerializer
    queryset = models.Insumo.objects.all()

class TipoHerramientaCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.TipoHerramientaSerializer
    queryset = models.TipoHerramienta.objects.all()

class HerramientaCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.HerramientaSerializer
    queryset = models.Herramienta.objects.all()

class OrdenRetiroCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.OrdenRetiroSerializer
    queryset = models.OrdenRetiro.objects.all()

class AjusteStockCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.AjusteStockSerializer
    queryset = models.AjusteStock.objects.all()

class EstadoHerramientaCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.EstadoHerramientaSerializer
    queryset = models.EstadoHerramienta.objects.all()
