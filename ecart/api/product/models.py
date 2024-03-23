from django.db import models
from api.category.models import category

# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=100)
    description=models.CharField(max_length=10000)
    price=models.CharField(max_length=50)
    stock=models.CharField(max_length=50)
    availability=models.BooleanField(default=True,blank=True)
    created_date=models.DateField(auto_now_add=True)
    updated_date=models.DateField(auto_now=True)
    image=models.ImageField(blank=True,null=True,upload_to='images/')
    category=models.ForeignKey(category,on_delete=models.SET_NULL,blank=True,null=True)

    def __str__(self):
        return self.name