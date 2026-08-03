from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Gender(models.TextChoices):
        MALE = 'M', 'Male'
        FEMALE = 'F', 'Female'
        OTHER = 'O', 'Other'
        PREFER_NOT_TO_SAY = 'N', 'Prefer not to say'

    email = models.EmailField(unique=True)
    gender = models.CharField(max_length=1, choices=Gender.choices, blank=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']  # Keep username as a required field

    def __str__(self):
        return self.email