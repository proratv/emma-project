# Generated by Django 2.2.19 on 2021-03-23 06:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0004_employeedetail_employeelastid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employeedetail',
            name='address',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='birthday',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='contract',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='department',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='phone_1',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='phone_2',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='pic_contact',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='pic_name',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='pic_relation',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='position',
        ),
        migrations.RemoveField(
            model_name='employeedetail',
            name='type',
        ),
    ]