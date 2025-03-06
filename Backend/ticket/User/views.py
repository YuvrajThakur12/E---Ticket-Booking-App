from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer, userSerializer
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class UserView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        users = Profile.objects.all()
        serializer = ProfileSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        name = request.data['name']
        phone = request.data['phone']
        pic = request.data['pic']
        
        user = User.objects.create_user(username=username, password=password)
        profile = Profile(user=user, name=name, phone=phone, pic=pic)
        user.save()
        profile.save()

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'User created successfully',
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        
        if not username or not password:
            return Response("Please provide username and password")
        
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response("Invalid credentials", status=401)
        
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({
            'message': 'User login successfully',
            'refresh': str(refresh),
            'access': str(refresh.access_token)
            }, status=status.HTTP_201_CREATED)
        return Response("Invalid credentials", status=422)
        
# class getUser(APIView):
#     def get(self, request):
#         user = request.user
#         serializer = userSerializer(user)
#         return Response(serializer.data)