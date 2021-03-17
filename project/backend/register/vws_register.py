from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import EmployeeSerializer
from .models import Employee,EmployeeDetail

# Create your views here.
class EmployeeView(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeSerializer          # add this
  queryset = Employee.objects.all()             # line 10
  #queryset=Employee.objects.raw("select * from register_employee where id='10'")


from .serializers import EmployeeLastIDSerializer
class EmployeeLastIDSerializer(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeLastIDSerializer         # add this
  queryset = Employee.objects.raw("select max(id)+1 AS ID FROM public.register_employee")              # add this

