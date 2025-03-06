from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import MyTicket
from Events.models import Events
from Events.serializers import EventsSerializer
from Travels.models import Travels
from Travels.serializers import TravelsSerializer
from django.contrib.auth.models import User

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class MyTicketSerializer(ModelSerializer):

    user = ProfileSerializer(read_only=True)
    events = EventsSerializer(read_only=True)
    travels = TravelsSerializer(read_only=True)

        # Allow writing event ID during creation
    events_id = serializers.PrimaryKeyRelatedField(
        queryset=Events.objects.all(), source="events", write_only=True, required=False
    )
    travels_id = serializers.PrimaryKeyRelatedField(
        queryset=Travels.objects.all(), source="travels", write_only=True, required=False
    )

    class Meta:
        model = MyTicket
        fields = ["id", "user", "events", "travels", "events_id", "travels_id"]