from rest_framework.serializers import ModelSerializer
from .models import Travels

class TravelsSerializer(ModelSerializer):
    class Meta:
        model = Travels
        fields = '__all__'