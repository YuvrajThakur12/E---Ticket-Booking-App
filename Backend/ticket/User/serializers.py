from rest_framework.serializers import ModelSerializer
from .models import Profile
from django.contrib.auth.models import User

# Define UserSerializer first
class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class userSerializer(ModelSerializer):
    Profile = ProfileSerializer(read_only=True)
    class Meta:
        model = User
        fields = '__all__'

# Now you can use UserSerializer in other serializers
