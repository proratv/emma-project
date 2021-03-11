# Generated by Django 2.2.16 on 2020-10-17 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=50)),
                ('date_create', models.DateField(auto_now_add=True)),
                ('last_login', models.DateField(auto_now=True)),
            ],
        ),
    ]
