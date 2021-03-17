from rest_framework import serializers
from .models import Employee,EmployeeLastID

class EmployeeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Employee
    fields = ('id','first_name', 'last_name', 'email', 'created', 'join_date')
    #name_map = {'first': 'first_name', 'last': 'last_name', 'bd': 'birth_date', 'pk': 'id'}
    #Employee.objects.raw('select * from register_employee where id=6')
    #Person.objects.raw('SELECT * FROM some_other_table', translations=name_map)


class EmployeeLastIDSerializer(serializers.ModelSerializer):
  class Meta:
    model=EmployeeLastID
    fields=('__all__')

    

    