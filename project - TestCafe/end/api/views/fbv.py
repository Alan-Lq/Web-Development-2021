from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Menu, Dish, Order
from api.serializers import MenuSerializer, DishSerializer, OrderSerializer
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def menu_list(request):
    if request.method == 'GET':
        menu = Menu.objects.filter(name__contains='5').order_by('-id')
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)



@api_view(['GET', 'PUT', 'DELETE'])
def menu_detail(request, tour_id):
    try:
        menu = Menu.objects.get(id=tour_id)
    except Menu.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = MenuSerializer(menu)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = MenuSerializer(instance=menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
       menu.delete()
    return Response({'message': 'deleted'}, status=204)

@api_view(['GET', 'POST'])
def dish_list(request):
    if request.method == 'GET':
        dish = Dish.objects.filter(name__contains='5').order_by('-id')
        serializer = DishSerializer(dish, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DishSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def dish_detail(request, about_id):
    try:
        about = Dish.objects.get(id=about_id)
    except Dish.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = DishSerializer(about)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DishSerializer(instance=about, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        about.delete()
        return Response({'message': 'deleted'}, status=204)

@api_view(['GET','DELETE'])
def order_list(request, about_id):
        try:
            about = Order.objects.get(id=about_id)
        except Order.DoesNotExist as e:
            return Response({'message': str(e)}, status=400)

        if request.method == 'GET':
            serializer = OrderSerializer(about)
            return Response(serializer.data)

        elif request.method == 'DELETE':
            about.delete()
            return Response({'message': 'deleted'}, status=204)