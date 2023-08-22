from rest_framework import viewsets
from . import serializer
from . import models

class EmpleadoCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.EmpleadoSerializer
    queryset = models.Empleado.objects.all()

class OrdenServicioCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.OrdenServicioSerializer
    queryset = models.OrdenServicio.objects.all()

class EncuestaSatisfaccionCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.EncuestaSatisfaccionSerializer
    queryset = models.EncuestaSatisfaccion.objects.all()

class TareaCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.TareaSerializer
    queryset = models.Tarea.objects.all()
