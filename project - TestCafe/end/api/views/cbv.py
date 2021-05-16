from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from api.models import Order, Menu, Dish
from rest_framework.response import Response
from django.http import Http404
from rest_framework.views import APIView
from api.serializers import MenuSerializer,DishSerializer


class MenuListAPIView(APIView):
    def get(self, request):
        menu = Menu.objects.all()
        serializer = MenuSerializer(menu, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class MenuDetailAPIView(APIView):
        permission_classes = [IsAuthenticated]

        def put(self, request, pk=None):
            user = self.get_object(pk)
            serializer = MenuSerializer(instance=user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)




class DishListAPIView(APIView):
            def get(self, request):
                dishes = Dish.objects.all()
                serializer = DishSerializer(dishes, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            def post(self, request):
                serializer = DishSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors)


class DishDetailAPIView(APIView):
    def get_object(self, pk):
        try:
            return Dish.objects.get(id=pk)
        except Dish.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        dish = request.get_object(pk)
        serializer = DishSerializer(dish)
        return Response(serializer.data)

    def put(self, request, pk=None):
        dish = request.get_object(pk)
        serializer = DishSerializer(instance=dish, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)