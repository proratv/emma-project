from rest_framework import serializers
from .models import EmployeeDetailModel
    
class EmployeeDetailSz(serializers.ModelSerializer):
  class Meta:
    db_table='mst_employee'
    model=EmployeeDetailModel
    #fields=('__all__')

    fields=('id', 'type', 'contract', 'department', 'position', 
    'phone_1', 'phone_2', 'address', 'birthday', 'pic_name',
    'pic_contact', 'pic_relation')
