from django.db import models

# Create your models here.
class Events(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    pic = models.ImageField(upload_to='profile_pics', null=True, blank=True)
    price = models.CharField(max_length = 100)
    date = models.DateField()
    time = models.TimeField()