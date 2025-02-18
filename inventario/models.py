from django.db import models
from tarea.models import Tarea

class TipoInsumo(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    descripcion = models.CharField(max_length=256)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.nombre)

class Insumo(models.Model):
    id = models.AutoField(primary_key=True)
    tipoInsumo_id = models.ForeignKey(TipoInsumo, on_delete=models.DO_NOTHING)
    nombre = models.CharField(max_length=32)
    MEDIDA_CHOICES = (
        ('metro', 'metro'),
        ('litro', 'litro'),
        ('gramo', 'gramo'),
        ('contable', 'contable'),
    )
    unidadMedida = models.CharField(max_length=16, choices=MEDIDA_CHOICES, default='contable')
    cantidad = models.IntegerField()
    codigo = models.CharField(max_length=16)
    descripcion = models.CharField(max_length=256)
    
    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.nombre, self.cantidad)
    
    
class TipoHerramienta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    descripcion = models.CharField(max_length=256)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.Nombre)

class Herramienta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32)
    tipoHerramienta_id = models.ForeignKey(TipoHerramienta, on_delete=models.DO_NOTHING)
    codigo = models.CharField(max_length=16)
    ESTADO_CHOICES = (
        ('OK', 'OK'),
        ('En reparación', 'En reparación'),
        ('Mal estado', 'Mal estado'),
    )
    estado = models.CharField(max_length=16, choices=ESTADO_CHOICES, default='OK')

    def __str__(self):
        texto = "{0} [{1}]"
        return texto.format(self.nombre, self.estado)    

class PedidoInsumo(models.Model):
    id = models.AutoField(primary_key=True)
    insumo_id = models.ForeignKey(Insumo,on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    fechaHora = models.DateTimeField(auto_now=True)
        
class OrdenRetiro(models.Model):
    id = models.AutoField(primary_key=True)
    insumo_id = models.ForeignKey(Insumo, on_delete=models.DO_NOTHING)
    tarea_id = models.ForeignKey(Tarea, on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    fechaHora = models.DateTimeField(auto_now=True)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.idInsumo, self.cantidad)

class AjusteStock(models.Model):
    id = models.AutoField(primary_key=True)
    insumo_id = models.ForeignKey(Insumo, on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    motivo = models.CharField(max_length=256)
