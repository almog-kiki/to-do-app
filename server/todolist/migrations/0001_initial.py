# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-06-26 08:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoList',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('content', models.TextField(blank=True)),
                ('created', models.DateField(default=b'2020-06-26')),
                ('due_date', models.DateField(default=b'2020-06-26')),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
    ]
