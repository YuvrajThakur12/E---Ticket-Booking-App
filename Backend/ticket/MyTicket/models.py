from django.db import models
from Events.models import Events
from Travels.models import Travels
from django.contrib.auth.models import User
# Create your models here.

class MyTicket(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    events = models.ForeignKey(Events, on_delete=models.CASCADE, null=True, blank=True)
    travels = models.ForeignKey(Travels, on_delete=models.CASCADE, null = True, blank=True)

    