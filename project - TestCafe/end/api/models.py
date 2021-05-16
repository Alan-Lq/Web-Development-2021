from django.db import models
from django.contrib.auth.models import User


class MenuManager(models.Manager):
    def order_by_name(self, name):
        return self.order_by('name')


class Menu(models.Model):
    name = models.CharField(max_length=200)
    image_url_menu = models.CharField(max_length=255)
    objects = MenuManager()

    def __str__(self):
        return '{}'.format(self.name)


class Dish(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    imageUrl = models.TextField(default=' ')
    description = models.TextField(default=' ')
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE, related_name='dishes')
    count = models.IntegerField()

    def __str__(self):
        return '{}'.format(self.name, self.description)


class OrderManager(models.Manager):
    def for_user(self, user):
        return self.filter(user=user)


class Order(models.Model):
    name = models.CharField(max_length=200)
    imageUrl = models.TextField(default=' ')
    price = models.FloatField()
    count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    objects = OrderManager()

    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'

    def __str__(self):
        return '{}: {}'.format(self.name, self.count,self.imageUrl, self.price)

    def to_json(self):
        return {
            'id: ': self.id,
            'name: ': self.name,
            'ImageUrl': self.ImageUrl,
            'price': self.price,
            'count': self.count
        }


class AuthResponse(models.Model):
     token = models.CharField(max_length=250)
     is_admin = models.BooleanField()
     name = models.CharField(max_length=100)

     def __str__(self):
         return '{}'.format(self.name)


