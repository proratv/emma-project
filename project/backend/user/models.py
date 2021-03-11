from django.db import models

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=50)
    date_created = models.DateField(auto_now_add=True)
    last_login = models.DateField(auto_now=True)

    def _str_(self):
      return self.title
