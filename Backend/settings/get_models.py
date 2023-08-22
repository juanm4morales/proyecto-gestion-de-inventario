from django.apps import apps
from django.http import JsonResponse

def get_models(request):
    # Get apps
    apps_names = ["inventario", "compra", "usuario", "tarea"]

    #aplicaciones = apps.get_app_configs()
    #for app in aplicaciones:

    models_dict = {}
    for _ in apps_names:
        app = apps.get_app_config(_)
        models = app.get_models()
        for model in models:
            table_name = model._meta.db_table
            attrs = [field.name for field in model._meta.fields]
            models_dict[table_name] = attrs

    return JsonResponse(models_dict)
