# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils import timezone
# import datetime

from django.db import models

class TodoList(models.Model): #Todolist table name that inherits models.Model
    title = models.CharField(max_length=250,blank=True) # a varchar
    content = models.TextField(blank=True) # a text field 
    created = models.DateTimeField(auto_now_add=True)# a date
    modify_date = models.DateTimeField(auto_now_add=True) # a date
    class Meta:
        ordering = ["-modify_date"] #ordering by the created field
    def __str__(self):
        return self.title #name to be shown when called


# Set modify_date 
@receiver(pre_save, sender=TodoList)
def set_modify_date_on_update(sender, instance, update_fields, **kwargs):
    instance.modify_date = timezone.localtime(timezone.now()).strftime('%Y-%m-%dT%H:%M')

