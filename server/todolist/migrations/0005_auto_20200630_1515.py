# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-06-30 15:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0004_auto_20200630_1511'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='created',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='todolist',
            name='modify_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
