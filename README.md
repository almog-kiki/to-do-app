##  To Do App 

Implements CRUD for yours tasks.
This app using Angular 10 and Django (python) platforms.

# verions:
    node v13.10.1
    npm 6.13.7
    angular 10
    python 2.7.17 
    Django 1.11.29
    djangorestframework 3.9.4
    django-cors-headers 3.0.2

# How to run 
```
docker-compose -f docker-compose-<target>.yml  <Commands>
```
- development
```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up -d
```

- production
```
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up -d
```

- stop:
```
docker-compose -f docker-compose-<target>.yml down
```






