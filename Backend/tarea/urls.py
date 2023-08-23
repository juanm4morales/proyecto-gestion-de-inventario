from django.urls import path, include
from rest_framework import routers
from tarea import views

router = routers.DefaultRouter()
router.register(r'empleados', views.EmpleadoCRUD, 'empleados')
router.register(r'ordenesservicio', views.OrdenServicioCRUD, 'ordenesservicio')
router.register(r'encuestassatisfaccion', views.EncuestaSatisfaccionCRUD, 'encuestassatisfaccion')
router.register(r'tareas', views.TareaCRUD, 'tareas')

urlpatterns = [
    path('', include(router.urls)),
]
