from django.urls import path, include
from rest_framework import routers
from tarea import views

router = routers.DefaultRouter()
router.register(r'empleado', views.EmpleadoCRUD, 'empleado')
router.register(r'ordeneservicio', views.OrdenServicioCRUD, 'ordeneservicio')
router.register(r'encuestasatisfaccion', views.EncuestaSatisfaccionCRUD, 'encuestasatisfaccion')
router.register(r'tarea', views.TareaCRUD, 'tarea')

urlpatterns = [
    path('', include(router.urls)),
]
