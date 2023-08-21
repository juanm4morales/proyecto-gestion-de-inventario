from rest_framework import viewsets
from . import serializer
from . import models

class UsuarioCRUD(viewsets.ModelViewSet):
    serializer_class = serializer.UsuarioSerializer
    queryset = models.Usuario.objects.all()
