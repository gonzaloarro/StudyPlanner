from django.db import models
from django.contrib.auth.models import User
from django.core import validators

# Models
class Plan(models.Model):
    owner = models.ForeignKey(User, related_name="plans", on_delete=models.CASCADE)
    title = models.CharField(max_length = 60)
    date_and_time = models.DateTimeField()
    duration = models.PositiveSmallIntegerField(validators=[validators.MaxValueValidator(840)], default=240)

class Event(models.Model):
    owner = models.ForeignKey(User, related_name="events", on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, related_name="events", on_delete=models.CASCADE)
    title = models.CharField("event's title", max_length = 60)
    date = models.DateTimeField()
    duration = models.PositiveSmallIntegerField(validators=[validators.MinValueValidator(30), validators.MaxValueValidator(480)], default=60)

class Note(models.Model):
    owner = models.ForeignKey(User, related_name="notes", on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, related_name="notes", on_delete=models.CASCADE)
    title = models.CharField("note's title", max_length = 60)
    text = models.TextField(blank=True)

class Task(models.Model):
    owner = models.ForeignKey(User, related_name="tasks", on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, related_name="tasks", on_delete=models.CASCADE)
    description = models.CharField(max_length=50)
    date_and_time = models.DateTimeField()
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)
    duration = models.PositiveSmallIntegerField(validators=[validators.MinValueValidator(15), validators.MaxValueValidator(120)])

    CATEGORY_CHOICES = (
        ('Reading', 'Reading'),
        ('Problem Solving', 'Problem Solving'),
        ('Group Study', 'Group Study'),
        ('Summarize', 'Summarize'),
        ('Concept Map', 'Concept Map'),
        ('Topic Review', 'Topic Review'),
        ('Exam Simulation', 'Exam Simulation'),
    )
    category = models.CharField(
        max_length=2,
        choices=CATEGORY_CHOICES,
        default='Reading',
    )

    PRIORITY_CHOICES = (
        ('High', 'High'),
        ('Medium', 'Medium'),
        ('Low', 'Low'),
    )
    priority = models.CharField(
        max_length=1,
        choices=PRIORITY_CHOICES,
        default='Medium',
    )
