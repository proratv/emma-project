from django.db import models
from django.apps import apps
# Create your models here.

class EmployeeDetailModel(models.Model):       
   #model = next((m for m in apps.get_models() if m._meta.db_table=='mst_employee'), None)
   id=models.IntegerField(primary_key=True)
   type=models.CharField(max_length=100)
   contract=models.DateField()
   department=models.CharField(max_length=100)
   position=models.CharField(max_length=100)
   phone_1=models.CharField(max_length=100)
   phone_2=models.CharField(max_length=100)
   address=models.CharField(max_length=100)
   birthday=models.DateField()
   pic_name=models.CharField(max_length=100)
   pic_contact=models.CharField(max_length=100)
   pic_relation=models.CharField(max_length=100)  
#   objects = models.Manager()
   class Meta:
    managed = False
    db_table='mst_employee'

 
def _str_(self):
      return self.title 
