# Generated by Django 5.1.4 on 2025-03-05 10:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0003_events_price'),
        ('MyTicket', '0009_myticket_travels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myticket',
            name='events',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Events.events'),
        ),
    ]
