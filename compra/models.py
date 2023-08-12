from django.db import models
from inventario.models import PedidoInsumo

class Presupuesto(models.Model):
    id = models.AutoField(primary_key = True)
    #imagen = models.ImageField(upload_to="images/")
    fecha = models.DateField()
    proveedor = models.CharField(max_length = 255)
    total = models.FloatField()

class PresupuestoAsociado(models.Model):
    id = models.AutoField(primary_key = True)
    presupuesto_id = models.ForeignKey(Presupuesto, on_delete=models.DO_NOTHING)
    pedidoInsumo_id = models.ForeignKey(PedidoInsumo, on_delete=models.DO_NOTHING)
    aprobado = models.BooleanField(default = False)
