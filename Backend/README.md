# Gestión de Inventario API

Se trata de una API REST que ofrece principalmente interfaces que permiten desde un backend realizar las operaciones CRUD sobre una base de datos mySQL que contiene un esquema de base de datos para la gestión del inventario de Insumos y Herramientas.

## Stack de Tecnologías

- Django REST Framework
- Django Framework
- Python (Lenguaje para la implementación de la API)
- mySQL (motor de base de datos)

## Estructura del backend

    Backend/
    ├── compra
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── inventario
    │   ├── admin.py
    │   ├── apps.py
    │   ├── migrations
    │   ├── models.py
    │   ├── serializer.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── settings
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── tarea
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── usuario
    │   ├── admin.py
    │   ├── apps.py
    │   ├── models.py
    │   ├── tests.py
    │   └── views.py
    ├── manage.py
    ├── dockerfile
    ├── requirements.txt
    └── README.md

## Instrucciones de instalación

Primero se deben instalar todas las dependencias de la API que se encuentran en el archivo requirements.py.

    pip install -r requirements.py

...

## Comandos para la Ejecución

Para la ejecución en entorno de desarrollo.

    django-admin runserver

o tambien se puede utilizar:

    manage.py runserver

...settings

## Esquema de la Base de datos

- (IMAGEN)

## Acceder a la documentación de la API

    ---