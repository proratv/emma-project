# Generated by Django 2.2.19 on 2021-03-23 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pictureuploadmodel',
            name='prof_pic',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]