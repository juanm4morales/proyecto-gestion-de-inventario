from django.db import models
from compra.models import OrdenCompra
from tarea.models import Tarea

class TipoInsumo(models.Model):
    idTipoInsumo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32, null=False)
    descripcion = models.CharField(max_length=256)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.nombre)

class Insumo(models.Model):
    idInsumo = models.AutoField(primary_key=True)
    idTipoInsumo = models.ForeignKey(TipoInsumo, on_delete=models.PROTECT)
    nombre = models.CharField(max_length=32, null=False)
    MEDIDA_CHOICES = (
        ('metro', 'metro'),
        ('litro', 'litro'),
        ('gramo', 'gramo'),
        ('contable', 'contable'),
    )
    unidadMedida = models.CharField(max_length=16, choices=MEDIDA_CHOICES, default='contable')
    cantidad = models.IntegerField(null=False)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.nombre, self.cantidad)
    
    
class TipoHerramienta(models.Model):
    idTipoHerramienta = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32, null=False)
    descripcion = models.CharField(max_length=256)

    def __str__(self):
        texto = "{0}"
        return texto.format(self.Nombre)

class Herramienta(models.Model):
    idHerramienta = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=32, null=False)
    idTipoHerramienta = models.ForeignKey(TipoInsumo, on_delete=models.PROTECT)
    codigo = models.CharField(max_length=16, null=False)
    ESTADO_CHOICES = (
        ('OK', 'OK'),
        ('En reparación', 'En reparación'),
        ('Mal estado', 'Mal estado'),
    )
    estado = models.CharField(max_length=16, choices=ESTADO_CHOICES, default='OK')

    def __str__(self):
        texto = "{0} [{1}]"
        return texto.format(self.nombre, self.estado)    
    
class InsumoOrdenCompra(models.Model):
    idTransaccion = models.AutoField(primary_key=True)
    idInsumo = models.ForeignKey(Insumo, on_delete=models.PROTECT)
    idOrdenDeCompra = models.ForeignKey(OrdenCompra, on_delete=models.PROTECT)
    cantidad = models.IntegerField(null=False)
    fechaHora = models.DateTimeField(auto_now=True, null=False)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.idInsumo, self.cantidad)
    
class InsumoTarea(models.Model):
    idTransaccion = models.AutoField(primary_key=True)
    idInsumo = models.ForeignKey(Insumo, on_delete=models.PROTECT)
    idTarea = models.ForeignKey(Tarea, on_delete=models.PROTECT)
    cantidad = models.IntegerField(null=False)
    fechaHora = models.DateTimeField(auto_now=True, null=False)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.idInsumo, self.cantidad)
'''

class TransaccionInsumos(models.Model):
    idTransaccion = models.AutoField(primary_key=True)
    idInsumo = models.ForeignKey(Insumo, on_delete=models.PROTECT)
    idTarea = models.ForeignKey(Tarea, on_delete=models.PROTECT)
    idOrdenDeCompra = models.ForeignKey(OrdenDeCompra, on_delete=models.PROTECT)
    cantidad = models.IntegerField(null=False)
    motivo = models.CharField(max_length=256, null=False)
    fechaYHora = models.DateTimeField(auto_now=True, null=False)

    def __str__(self):
        texto = "{0} [{1}]"
        return texto.format(self.nombre, self.estado) 

'''