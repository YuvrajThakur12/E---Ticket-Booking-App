# Generated by Django 5.1.4 on 2025-03-03 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MyTicket', '0007_remove_myticket_travels'),
        ('Travels', '0002_travels_name'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Travels',
        ),
    ]
