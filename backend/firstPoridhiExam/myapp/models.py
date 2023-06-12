# Create your models here.
from django.db import models

class Country(models.Model):
    name = models.CharField("Country Name", max_length=240)
    reference = models.CharField("Reference", max_length=50, null=True)
    capital = models.CharField("Capital City", max_length=100)
    created_at = models.DateField("Created Date", auto_now_add=True)
    updated_at = models.DateField("Updated Date", null=True, blank=True)

    def __str__(self):
        return self.name