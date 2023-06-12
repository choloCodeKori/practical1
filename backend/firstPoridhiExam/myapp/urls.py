from django.urls import path, include
from myapp import views

urlpatterns = [
    path('create/', views.add_country),
    path('delete/', views.del_country),
]
