from django.db import models

# Create your models here.
class category(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    created_date=models.DateField(auto_now_add=True)
    updated_date=models.DateField(auto_now=True)

    def __str__(self):
        return self.name