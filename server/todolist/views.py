# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.shortcuts import render,redirect
from .models import TodoList
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .serializers import ToDoListSerializer
from rest_framework.decorators import api_view


def get_all_tasks(request):
    todolists = TodoList.objects.all()
    title = request.GET.get('title', None)
    if title is not None:
        todolists = todolists.filter(title__icontains=title)
    todolist_serializer = ToDoListSerializer(todolists, many=True)
    return JsonResponse(todolist_serializer.data, safe=False)

def create_task(request):
    task_data = JSONParser().parse(request)
    todolist_serializer = ToDoListSerializer(data=task_data)
    if todolist_serializer.is_valid():
        todolist_serializer.save()
        return JsonResponse(todolist_serializer.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(todolist_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
def delete_all_tasks(request):
    count = TodoList.objects.all().delete()
    return JsonResponse({'message': '{} Tasks were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','POST','DELETE'])
def task_list(request):
    if request.method == 'GET':
        return get_all_tasks(request) 
    elif request.method == 'POST':
        return create_task(request)
    elif request.method == 'DELETE':
        return delete_all_tasks(request)


def get_task_by_pk(task):
    todolist_serializer = ToDoListSerializer(task) 
    return JsonResponse(todolist_serializer.data)

def update_task(task, request):
    task_data = JSONParser().parse(request) 
    todolist_serializer = ToDoListSerializer(task, data=task_data) 
    if todolist_serializer.is_valid(): 
        todolist_serializer.save() 
        return JsonResponse(todolist_serializer.data) 
    return JsonResponse(todolist_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def delete_task(task):
    task.delete() 
    return JsonResponse({'message': 'Task was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def todo_detail(request, pk):
    # find task by pk (id)
    try: 
        task = TodoList.objects.get(pk=pk) 
    except TodoList.DoesNotExist: 
        return JsonResponse({'message': 'The task does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        return get_task_by_pk(task)
    elif request.method == 'PUT': 
        return update_task(task, request)
    elif request.method == 'DELETE': 
        return delete_task(task)
