# Generated by Django 4.2.2 on 2023-08-09 03:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tarea', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Insumo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=32)),
                ('unidadMedida', models.CharField(choices=[('metro', 'metro'), ('litro', 'litro'), ('gramo', 'gramo'), ('contable', 'contable')], default='contable', max_length=16)),
                ('cantidad', models.IntegerField()),
                ('codigo', models.CharField(max_length=16)),
                ('descripcion', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='TipoHerramienta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=32)),
                ('descripcion', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='TipoInsumo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=32)),
                ('descripcion', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='PedidoInsumo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('fechaHora', models.DateTimeField(auto_now=True)),
                ('insumo_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventario.insumo')),
            ],
        ),
        migrations.CreateModel(
            name='OrdenRetiro',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('fechaHora', models.DateTimeField(auto_now=True)),
                ('insumo_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventario.insumo')),
                ('tarea_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='tarea.tarea')),
            ],
        ),
        migrations.AddField(
            model_name='insumo',
            name='tipoInsumo_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventario.tipoinsumo'),
        ),
        migrations.CreateModel(
            name='Herramienta',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=32)),
                ('codigo', models.CharField(max_length=16)),
                ('estado', models.CharField(choices=[('OK', 'OK'), ('En reparación', 'En reparación'), ('Mal estado', 'Mal estado')], default='OK', max_length=16)),
                ('tipoHerramienta_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventario.tipoherramienta')),
            ],
        ),
        migrations.CreateModel(
            name='AjusteStock',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('motivo', models.CharField(max_length=256)),
                ('insumo_id', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='inventario.insumo')),
            ],
        ),
    ]