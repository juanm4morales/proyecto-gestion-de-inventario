from django.db import models

# Create your models here.
class Usuario(models.Model):
    legajo = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    cargo = models.CharField(max_length=255)
    mail = models.EmailField()

class OrdenDeServicio(models.Model):
    Usuario = model.models.ForeignKey("Usuario", verbose_name=_("ID de usuairo"), on_delete=models.DO_NOTHING)
    

class Tarea(models.Model):
    class TipoTarea(models.TextChoices):
        INDEFINIDO = "IND"
    idEmpleado = models.ManyToManyField("Empleado")
    legajo = models.IntegerField(unique=True)
    tipo = models.CharField(
        max_length=3,
        choices=TipoTarea.choices,
        default=TipoTarea.INDEFINIDO
    )
    descripcion = models.CharField(max_length=255)
    fechaTentativa = models.DateField((""), auto_now=False, auto_now_add=False)
    fechaInicio = models.DateField()
    fechaFin = models.DateField()
    
class Empleado(models.Model):
    dni = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    telefono = models.PhoneNumberField((""))
    mail = models.EmailField()
    
class Herramienta(models.Model):
    tipo = models.ForeignKey("TipoHerramienta", verbose_name=_(""), on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    
class TipoHerramienta(models.Model):
    nombre = models.CharField(_(""), max_length=50)
    descripcion = models.CharField(_(""), max_length=255)
    
class AjusteStock(models.Model):
    

class Insumo(models.Model):
    tipo = models.models.ForeignKey("TipoInsumo", on_delete=models.DO_NOTHING)
    cantidad = models.IntegerField()
    descripcion = models.CharField(max_length=255)