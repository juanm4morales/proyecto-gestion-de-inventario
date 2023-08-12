from django.db import models

# Create your models here.
class Usuario(models.Model):
    legajo = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    cargo = models.CharField(max_length=255)
    mail = models.EmailField()
    telefono = models.CharField(max_length=255)
