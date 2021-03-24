from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import EmployeeSerializer
from .serializers import EmployeeLastIDSerializer
from .models import Employee,EmployeeLastID

# Create your views here.
class EmployeeView(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeSerializer          # add this
  queryset = Employee.objects.all()             # line 10
  #queryset=Employee.objects.raw("select * from register_employee where id='10'")

class EmployeeLastIDSerializer(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeLastIDSerializer         # add this
  queryset = EmployeeLastID.objects.raw("select max(id)+1 AS ID FROM public.register_employee")              # add this

