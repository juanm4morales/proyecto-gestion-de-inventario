# Generated by Django 4.2.2 on 2023-06-20 22:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('PeopleManager', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tarea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('legajo', models.IntegerField(unique=True)),
                ('tipo', models.CharField(choices=[('IND', 'Indefinido')], default='IND', max_length=3)),
                ('descripcion', models.CharField(max_length=255)),
                ('fechaTentativa', models.DateField()),
                ('fechaInicio', models.DateField()),
                ('fechaFin', models.DateField()),
                ('idEmpleado', models.ManyToManyField(to='PeopleManager.empleado')),
                ('idSupTarea', models.OneToOneField(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='TaskManager.tarea', verbose_name='Tarea padre')),
            ],
        ),
        migrations.CreateModel(
            name='OrdenDeServicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaDeGeneracion', models.DateField()),
                ('caracter', models.CharField(choices=[('URG', 'Urgente'), ('NOR', 'Normal')], default='NOR', max_length=3)),
                ('categoria', models.CharField(choices=[('IND', 'Indefinido')], default='IND', max_length=3)),
                ('idTarea', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TaskManager.tarea', verbose_name='')),
                ('idUsuario', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='PeopleManager.usuario', verbose_name='Id del usuario')),
            ],
        ),
        migrations.CreateModel(
            name='EncuestaDeSatisfaccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('satisfaccion', models.CharField(choices=[('EXT', 'Exelente'), ('BNO', 'Bueno'), ('DFI', 'Deficiente'), ('MLO', 'Malo'), ('IND', 'Indefinido')], default='IND', max_length=3)),
                ('tiempoDeRespuesta', models.CharField(choices=[('EXT', 'Exelente'), ('BNO', 'Bueno'), ('DFI', 'Deficiente'), ('MLO', 'Malo'), ('IND', 'Indefinido')], default='IND', max_length=3)),
                ('Observaciones', models.CharField(max_length=255)),
                ('idOrdenDeServicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TaskManager.ordendeservicio')),
            ],
        ),
    ]