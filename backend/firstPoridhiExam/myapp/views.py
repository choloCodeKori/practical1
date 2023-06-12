from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Country
from django.core.cache import cache
from django.forms import model_to_dict

# Create your views here.
@api_view(['POST'])
def add_country(request):
    obj = Country.objects.create(reference=request.data['id'], name=request.data['id'], capital=request.data['id'])
    cache.set(request.data['id'], model_to_dict(obj))
    return JsonResponse({'data': 'success'})

@api_view(['POST'])
def del_country(request):
    print(request.data)
    obj = Country.objects.get(reference=request.data['id'])
    cache.delete(request.data['id'])
    obj.delete()
    return JsonResponse({'data': 'success'})