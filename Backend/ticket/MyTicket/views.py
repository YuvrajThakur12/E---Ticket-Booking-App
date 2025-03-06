from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MyTicket
from .serializers import MyTicketSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.

class MyTicketView(APIView):
   permission_classes = [IsAuthenticated]
   def get(self, request):
      u = request.user
      myticket = MyTicket.objects.filter(user = u)
      serializer = MyTicketSerializer(myticket, many = True)
      return Response(serializer.data)

   def post(self, request):
        serializer = MyTicketSerializer(data=request.data) 
        print(request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)