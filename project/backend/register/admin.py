from django.contrib import admin
from .models import Employee

class EmployeeAdmin(admin.ModelAdmin):  # add this
  list_display = ('id','first_name', 'last_name', 'email','join_date') # add this

# Register your models here.

admin.site.register(Employee,EmployeeAdmin)

