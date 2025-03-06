from django.db import models

# Create your models here.
class Travels(models.Model):
    name = models.CharField(max_length=100)
    currentplace = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    price = models.CharField(max_length = 100)
    pic = models.ImageField(upload_to='profile_pics', null=True, blank=True)