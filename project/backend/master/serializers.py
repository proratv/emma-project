from rest_framework import serializers
from .models import MasterEmployeeModel,MasterGlobalModel

class MasterEmployeeSz(serializers.ModelSerializer):
  class Meta:
    model = MasterEmployeeModel																																				
    fields=( "id_card","first_name","middle_name","last_name","birth_place","birth_date",
            "gender","street","sub_district","district","city",
            "province","postcode","country","phone1","phone2","email",
            "religion","marital","picture","pic_name","pic_contact","pic_relationship",
            "status","designation","department","expired_date","flag_active","segment1",
            "segment2","segment3","segment4","segment5","num1","num2",
            "num3","user_create","date_create","time_create")

class MasterGlobalSz(serializers.ModelSerializer):
  class Meta:
    model= MasterGlobalModel       
    field=( "code","type","description","segment1","segment2","segment3",
            "num1","num2","num3","note","flag_active","user_update",
            "date_update","time_update",
          )