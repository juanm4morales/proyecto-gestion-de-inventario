from rest_framework import viewsets
from . import serializer
from . import models

class CustomModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['post', 'get', 'put']

class EmpleadoCRUD(CustomModelViewSet):
    serializer_class = serializer.EmpleadoSerializer
    queryset = models.Empleado.objects.all()

class OrdenServicioCRUD(CustomModelViewSet):
    serializer_class = serializer.OrdenServicioSerializer
    queryset = models.OrdenServicio.objects.all()

class EncuestaSatisfaccionCRUD(CustomModelViewSet):
    serializer_class = serializer.EncuestaSatisfaccionSerializer
    queryset = models.EncuestaSatisfaccion.objects.all()

class TareaCRUD(CustomModelViewSet):
    serializer_class = serializer.TareaSerializer
    queryset = models.Tarea.objects.all()
