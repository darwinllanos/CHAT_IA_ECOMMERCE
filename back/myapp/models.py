from django.db import models

# Create your models here.
class user(models.Model):
    username = models.CharField(max_length=100, unique=True),
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    
class Category(models.Model):
    category_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.category_name
class Product(models.Model):
    product_name = models.CharField(max_length=100, unique=True)
    product_description = models.TextField()
    product_brand = models.CharField(max_length=100)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    product_image = models.ImageField(upload_to='products/')
    product_category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_stock = models.IntegerField(default=0)

    def __str__(self):
        return self.product_name
    
