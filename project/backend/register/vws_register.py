from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import EmployeeSerializer
from .models import Employee


# Create your views here.
class EmployeeView(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeSerializer          # add this
  queryset = Employee.objects.all()              # add this
