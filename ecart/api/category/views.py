from django.shortcuts import render
from rest_framework import viewsets
from .models import category
from .serializers import Categoryserializer
# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
        queryset= category.objects.all()
        serializer_class= Categoryserializer