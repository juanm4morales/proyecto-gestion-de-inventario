from django.db import models
from tarea.models import Tarea

class TipoInsumo(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    descripcion = models.CharField(max_length=256, null=True)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.nombre)

class Insumo(models.Model):
    id = models.AutoField(primary_key=True)
    tipoInsumo = models.ForeignKey(TipoInsumo, on_delete=models.DO_NOTHING)
    descripcion = models.CharField(max_length=32)
    MEDIDA_CHOICES = (
        ('metro', 'metro'),
        ('litro', 'litro'),
        ('gramo', 'gramo'),
        ('contable', 'contable'),
    )
    unidadMedida = models.CharField(max_length=16, choices=MEDIDA_CHOICES, default='contable')
    cantidad = models.IntegerField()
    codigo = models.CharField(max_length=16, null=True)
    observaciones = models.CharField(max_length=256, null=True)
    puntoReposicion = models.IntegerField(null=True)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.nombre, self.cantidad)
    
    
class TipoHerramienta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    descripcion = models.CharField(max_length=256, null=True)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.Nombre)

class Herramienta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    tipoHerramienta = models.ForeignKey(TipoHerramienta, on_delete=models.DO_NOTHING)
    codigo = models.CharField(max_length=16, null=True)
    ESTADO_CHOICES = (
        ('OK', 'OK'),
        ('En reparación', 'En reparación'),
        ('Mal estado', 'Mal estado'),
    )
    estado = models.CharField(max_length=16, choices=ESTADO_CHOICES, default='OK')

    tipoInsumo = models.ForeignKey(TipoInsumo, on delete=models.DO_NOTHING)
    fechaAlta = models.DateTimeField(auto_now=True)
    observaciones = models.CharField(max_length=255, null=True)

    def __str__(self):
        texto = "{0} [{1}]"
        return texto.format(self.nombre, self.estado)    
        
class OrdenRetiro(models.Model):
    id = models.AutoField(primary_key=True)
    insumo = models.ForeignKey(Insumo, on_delete=models.DO_NOTHING)
    tarea = models.ForeignKey(Tarea, on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    fechaHora = models.DateTimeField(auto_now=True)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.idInsumo, self.cantidad)

class AjusteStock(models.Model):
    id = models.AutoField(primary_key=True)
    insumo = models.ForeignKey(Insumo, on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    observaciones = models.CharField(max_length=256)
    fecha = models.DateTimeField(auto_now=True)
    
    ACCION_CANTIDAD = (
            ("+", "+"),
            ("-", "-"),
    )
    accionCantidad = models.CharField(max_length=1, choices=ESTADO_CHOICES)

class BajaHerramienta(models.Model):
    herramienta = models.ForeignKey(Herramienta, on_delete=models.DO_NOTHING)
    fecha = models.DateTimeField(auto_now=True)
    observaciones = models.CharField(max_length=255, null=True)
