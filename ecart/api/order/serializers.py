from rest_framework import serializers
from .models import Order


class Orderserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields= '__all__'