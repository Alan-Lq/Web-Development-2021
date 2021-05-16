from rest_framework import serializers
from api.models import Dish, Order, Menu
from django.contrib.auth.models import User
from django.contrib.auth.hashers import BCryptSHA256PasswordHasher


class MenuSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    image_url_menu = serializers.CharField(max_length=255)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.image_url_menu = validated_data.get('image_url_menu', instance.image_url_menu)
        instance.save()
        return instance

    def create(self, validated_data):
        menu = Menu.objects.create(name=validated_data('name'), image_url_menu=validated_data('image_url_menu'))
        return menu


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'email', 'is_staff')


class DishSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.description = validated_data.get('description', instance.description)
        instance.imageUrl = validated_data.get('imageUrl', instance.imageUrl)
        instance.count = validated_data.get('count', instance.count)
        instance.menu = validated_data.get('menu', instance.menu)
        instance.save()
        return instance

    def create(self, validated_data):
        dish = Dish.objects.create(name=validated_data('name'), price=validated_data('price'),
                                   description=validated_data('price'), imageUrl=validated_data('imageUrl'),
                                   count=validated_data('count'), menu=validated_data('menu'))
        return dish

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    imageUrl = serializers.CharField(max_length=255)
    count = serializers.IntegerField(default=1)
    menu = MenuSerializer(read_only=True)


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    encoder = BCryptSHA256PasswordHasher()

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name')

    def create(self, validated_data):
        password = validated_data.pop('password')
        hashed_password = self.encoder.encode(password, salt=self.encoder.salt())
        user = User.objects.create(password=hashed_password, **validated_data)
        user.save()
        return user


class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True, default=1)

    class Meta:
        model = Order
        fields = '__all__'
