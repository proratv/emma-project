from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import MasterEmployeeSz#,MasterGlobalSz
from .models import MasterEmployeeModel#,MasterGlobalModel


# Create your views here.
class MasterEmployeeView(viewsets.ModelViewSet):       # add this
  serializer_class = MasterEmployeeSz         # add this
  queryset=MasterEmployeeModel.objects.raw("select * from public.mst_employee")
  #queryset=MasterEmployeeModel.objects.all()



# class MasterGlobalView(viewsets.ModelViewSet):       # add this
#    serializer_class = MasterGlobalModel             # add this 
#    queryset=MasterGlobalModel.objects.raw("select * from public.mst_global")
# #  queryset=MasterGlobalModel.objects.raw("select * from public.mst_global where condition =$s",[vCcondition])
#   #queryset=MasterGlobalModel.objects.filter()
