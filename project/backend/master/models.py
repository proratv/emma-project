from django.db import models
from django.apps import apps
# Create your models here.

class MasterEmployeeModel(models.Model):       
    id            =models.CharField(max_length=15,primary_key=True)
    id_card       =models.CharField(max_length=100)
    first_name    =models.CharField(max_length=100)
    middle_name   =models.CharField(max_length=100)
    last_name     =models.CharField(max_length=100)
    birth_place   =models.CharField(max_length=100)
    birth_date    =models.DateField(auto_now_add=True)
    gender        =models.CharField(max_length=15)
    street        =models.CharField(max_length=100)
    sub_district  =models.CharField(max_length=100)
    district      =models.CharField(max_length=100)
    city          =models.CharField(max_length=100)
    province      =models.CharField(max_length=100)
    postcode      =models.CharField(max_length=100)
    country       =models.CharField(max_length=100)
    phone1        =models.CharField(max_length=20)
    phone2        =models.CharField(max_length=20)
    email         =models.EmailField
    religion      =models.CharField(max_length=15)
    marital       =models.CharField(max_length=15)
    #picture=models.ImageField
    pic_name      =models.CharField(max_length=300)
    pic_contact   =models.CharField(max_length=20)
    pic_relationship=models.CharField(max_length=15)
    status        =models.CharField(max_length=15)
    designation   =models.CharField(max_length=15)
    department    =models.CharField(max_length=15)
    expired_date  =models.DateField(auto_now_add=True)
    flag_active   =models.BooleanField(default=True)
    segment1      =models.CharField(max_length=100)
    segment2      =models.CharField(max_length=100)
    segment3      =models.CharField(max_length=100)
    segment4      =models.CharField(max_length=100)
    segment5      =models.CharField(max_length=100)
    num1          =models.IntegerField(null=True)
    num2          =models.IntegerField(null=True)
    num3          =models.IntegerField(null=True)
    user_create   =models.CharField(max_length=15)
    date_create   =models.DateField(auto_now_add=True)
    time_create   =models.TimeField(blank=True)
    picture       =models.ImageField(null=True,blank=True)

    class Meta:
      managed = False
      db_table='mst_employee'
   
def _str_(self):
      return self.title 
     

class MasterGlobalModel(models.Model):     
      code        =models.CharField(primary_key=True, max_length=30)
      type        =models.CharField(max_length=15)
      description =models.CharField(max_length=300)
      segment1    =models.CharField(max_length=100)
      segment2    =models.CharField(max_length=100)
      segment3    =models.CharField(max_length=100)
      num1        =models.IntegerField(null=True)
      num2        =models.IntegerField(null=True)
      num3        =models.IntegerField(null=True)
      note        =models.CharField(max_length=300)
      flag_active =models.BooleanField(default=False)
      user_update =models.CharField(max_length=20)
      date_update =models.DateField(auto_now_add=True)
      time_update =models.TimeField(blank=True)

      class Meta:
            # unique_together = ("code", "type")
            managed='False'
            db_table='mst_global'  
            constraints = [
            models.UniqueConstraint(fields=['code', 'type'], name='mst_global_pkey')
            # models.CheckConstraint(check=models.Q(type !=NUll), name='check_const')
                          ]
