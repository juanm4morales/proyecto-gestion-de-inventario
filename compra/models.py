from django.db import models

# Create your models here.
class OrdenCompra(models.Model):
    idOrden = models.AutoField(primary_key = True)
    idPresupuestoOrden = models.ForeignKey("PresupuestoOrdenCompra", on_delete=models.DO_NOTHING)
    fecha = models.DateField()

class Presupuesto(models.Model):
    idPresupuesto = models.AutoField(primary_key = True)
    imagen = models.ImageField(upload_to="images/")
    fecha = models.DateField()
    proveedor = models.CharField(max_length = 255)
    total = models.FloatField()

class PresupuestoOrdenCompra(models.Model):
    idPresupuestoOrden = models.AutoField(primary_key = True)
    idPresupuesto = models.ForeignKey("Presupuesto", on_delete=models.DO_NOTHING)
    idOrden = models.ForeignKey("OrdenCompra", on_delete=models.DO_NOTHING)
    eleccion = models.BooleanField(default = False)

