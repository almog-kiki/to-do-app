from rest_framework import serializers 
from .models import TodoList
 
 
class ToDoListSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = TodoList
        fields = ('id',
                  'title',
                  'content',
                  'created',
                  'modify_date')