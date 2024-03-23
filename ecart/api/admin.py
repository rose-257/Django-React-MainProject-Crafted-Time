from django.contrib import admin
from .category.models import category
from .product.models import Product
from .user.models import CustomUser
from .order.models import Order




# Register your models here.
admin.site.register(category)
admin.site.register(Product)
admin.site.register(CustomUser)
admin.site.register(Order)



