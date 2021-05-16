from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(max_length=300)
    city = models.CharField(max_length=300)
    address = models.TextField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f'{self.id}: {self.name}'

class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(max_length=300)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE,
                                null=True, related_name='vacancies')
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
            #'company': self.company
        }
    def __str__(self):
        return f'{self.id}: {self.name} | {self.salary}'