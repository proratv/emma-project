from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import EmployeeDetailSz
from .models import EmployeeDetailModel


# Create your views here.

class EmployeeDetailView(viewsets.ModelViewSet):       # add this
  serializer_class = EmployeeDetailSz         # add this
  #queryset=''
  queryset = EmployeeDetailModel.objects.raw("select * FROM public.mst_employee")              # add this
  #queryset = EmployeeDetailModel.objects.all() #error disini