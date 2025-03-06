from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Travels
from .serializers import TravelsSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class TravelView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, pk=None):
        if pk:
            travels = Travels.objects.get(pk=pk)
            serializer = TravelsSerializer(travels)
            return Response(serializer.data)
        travels = Travels.objects.all()
        serializer = TravelsSerializer(travels, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TravelsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)