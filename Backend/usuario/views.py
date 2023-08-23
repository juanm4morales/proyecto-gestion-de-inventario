from rest_framework import viewsets
from . import serializer
from . import models

class CustomModelViewSet(viewsets.ModelViewSet):
    http_method_names = ['post', 'get', 'put']

class UsuarioCRUD(CustomModelViewSet):
    serializer_class = serializer.UsuarioSerializer
    queryset = models.Usuario.objects.all()
