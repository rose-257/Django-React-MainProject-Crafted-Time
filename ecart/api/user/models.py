from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    name= models.CharField(max_length=50,default='Anonymous')
    email=models.EmailField(max_length=254,unique=True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    phone=models.CharField(max_length=20,blank=True,null=True)
    gender=models.CharField(max_length=20,blank=True,null=True)
    address=models.CharField(max_length=300,blank=True,null=True)

    session_token = models.CharField(max_length=10, default =0)

    created_date=models.DateField(auto_now_add=True)
    updated_date=models.DateField(auto_now=True) 