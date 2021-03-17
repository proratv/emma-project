from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    created = models.DateField(auto_now_add=True)
    join_date = models.DateField()
  
    def _str_(self):
      return self.title

class EmployeeLastID(models.Model):      
    id=models.IntegerField  
    def _str_(self):
      return self.title


class EmployeeDetail(models.Model):   
   """
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
   objects = models.Manager()
   #class Meta:
   db_table='mst_employee'
   """  
def _str_(self):
      return self.title 