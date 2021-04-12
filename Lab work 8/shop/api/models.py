from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'active': self.is_active
        }


class Category(models.Model):
    name = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }