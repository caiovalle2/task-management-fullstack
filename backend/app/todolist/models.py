from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Task(models.Model):

    TODO = 'todo'
    IN_PROGRESS = 'inprogress'
    DONE = 'done'
    
    STATUS_CHOICES = [
        (TODO, 'To Do'),
        (IN_PROGRESS, 'In Progress'),
        (DONE, 'Done'),
    ]
    
    title = models.CharField(max_length=10)
    
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, null=False)

    description = models.CharField(max_length=50)

    deadline = models.DateField()

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=TODO)
    
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Task {self.id}: {self.description}"