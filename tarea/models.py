from django.db import models

# Create your models here.

class Empleado(models.Model):
    dni = models.IntegerField(unique=True)
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    telefono = models.CharField(max_length=255)
    mail = models.EmailField()

    class Categoria(models.TextChoices):
        CATEGORIA1= "EJ1"
        CATEGORIA2= "EJ2"
    
    categoria = models.CharField(max_length=3,
                                 choices=Categoria.choices,
                                 default=Categoria.CATEGORIA1,
                                 null=True)

class OrdenServicio(models.Model):
    class CaracterScale(models.TextChoices):
        URGENTE = "URG"
        NORMAL = "NOR"
    class CategoriaScale(models.TextChoices):
        INDEFINIDO = "IND"

    id = models.AutoField(primary_key=True)
    usuario = models.ForeignKey("usuario.Usuario", verbose_name=("Id del usuario"), on_delete=models.DO_NOTHING)
    tarea = models.ForeignKey("tarea.Tarea", verbose_name=(""), on_delete=models.DO_NOTHING)
    fechaGeneracion = models.DateField(auto_now=False, auto_now_add=False)
    prioridad = models.CharField(
        max_length=3,
        choices=CaracterScale.choices,
        default=CaracterScale.NORMAL
    )
    categoria = models.CharField(
        max_length=3,
        choices=CategoriaScale.choices,
        default=CategoriaScale.INDEFINIDO
    )
    class StateScale(models.TextChoices):
        EN_ESPERA = "ESP"
        FINALIZADA = "FIN"
        EN_PROGRESO = "PRO"
    estado = models.CharField(
        max_length = 3,
        choices= StateScale.choices,
        default= StateScale.EN_ESPERA
    )
    
class EncuestaSatisfaccion(models.Model):
    class EscalaSatisfaccion(models.TextChoices):
        EXELENTE = "EXT"
        BUENO = "BNO"
        DEFICIENTE = "DFI"
        MALO = "MLO"
        INDEFINIDO = "IND"
    class TiempoRespuesta(models.TextChoices):
        EXELENTE = "EXT"
        BUENO = "BNO"
        DEFICIENTE = "DFI"
        MALO = "MLO"
        INDEFINIDO = "IND"

    ordenServicio = models.ForeignKey(OrdenServicio, on_delete=models.DO_NOTHING)
    satisfaccion = models.CharField(
        max_length=3,
        choices=EscalaSatisfaccion.choices,
        default=EscalaSatisfaccion.INDEFINIDO
    )
    tiempoRespuesta = models.CharField(
        max_length=3,
        choices=TiempoRespuesta.choices,
        default=TiempoRespuesta.INDEFINIDO
    )
    observaciones = models.CharField(max_length=255, null=True)

class Tarea(models.Model):
    id = models.AutoField(primary_key=True)
    empleado = models.ManyToManyField("tarea.Empleado",blank=False)
    supTarea = models.OneToOneField("tarea.Tarea", verbose_name=("Tarea padre"), on_delete=models.DO_NOTHING, null=True)
    #legajo = models.IntegerField(unique=True)
    class TipoTarea(models.TextChoices):
        INDEFINIDO = "IND"
    tipo = models.CharField(
        max_length=3,
        choices=TipoTarea.choices,
        default=TipoTarea.INDEFINIDO
    )
    descripcion = models.CharField(max_length=255, null=True)
    fechaTentativa = models.DateField(auto_now=False, auto_now_add=False)
    fechaInicio = models.DateField(auto_now=False, auto_now_add=False, null=True)
    fechaFin = models.DateField(auto_now=False, auto_now_add=False, null=True)
    herramienta = models.ManyToManyField("inventario.Herramienta", null=True)
