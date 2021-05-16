from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from api.models import Menu, Dish, Order
from api.serializers import MenuSerializer, DishSerializer, OrderSerializer, RegisterSerializer
from django.contrib.auth.models import User


@api_view(['GET', 'POST'])
def menu_view(request):
    if request.method == 'GET':
        menu_items = Menu.objects.order_by_name(request)
        serializer = MenuSerializer(menu_items, many=True)
        return Response(serializer.data, status=200)
    elif request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=500)


class OrderAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated)




class MenuDishesAPIView(APIView):
    def get_object(self, id):
        try:
            return Menu.objects.get(id=id)
        except Menu.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        menu = self.get_object(id)
        dishes = menu.dishes
        serializer = DishSerializer(dishes, many=True)
        return Response(serializer.data)

    def put(self, request, id):
        dish = self.get_object(id)
        serializer = DishSerializer(instance=dish, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DishDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


@api_view(['GET', 'POST', 'DELETE'])
def orders_list(request):
    permission_classes = (IsAuthenticated)
    if request.method == 'GET':
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == 'DELETE':
        orders = Order.objects.all()
        orders.delete()



class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
