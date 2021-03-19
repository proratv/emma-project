from django.contrib import admin
from .models import EmployeeDetailModel
# Register your models here.

class EmployeeDetailAdmin(admin.ModelAdmin):  # add this
  list_display = ('id', 'type', 'contract', 'department', 'position', 
    'phone_1', 'phone_2', 'address', 'birthday', 'pic_name',
    'pic_contact', 'pic_relation') # add this

admin.site.register(EmployeeDetailModel,EmployeeDetailAdmin)
