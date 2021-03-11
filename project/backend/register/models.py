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
