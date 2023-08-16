from rest_framework import viewsets
from .serializer import TipoInsumoSerializer
from .models import TipoInsumo

# Utiliza djangoRest para crear todas las vistas CRUD para TipoInsumo.
class TipoInsumoCRUD(viewsets.ModelViewSet):
    serializer_class = TipoInsumoSerializer
    queryset = TipoInsumo.objects.all()
    