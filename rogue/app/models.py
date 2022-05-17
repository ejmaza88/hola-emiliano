from django.db import models


# Create your models here.
class Message(models.Model):
    message = models.CharField(max_length=120)
    timestamp = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['timestamp']

    def __str__(self):
        return f'({self.id})'
