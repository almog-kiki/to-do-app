
from django.conf.urls import url 
from todolist import views

urlpatterns = [
    url(r'^api/todolist$', views.task_list),
    url(r'^api/todolist/(?P<pk>[0-9]+)$', views.todo_detail),
]
