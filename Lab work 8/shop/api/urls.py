from django.urls import path, re_path
from api.views import product_list, product_detail
from api.views import category_list, category_detail


urlpatterns = [
    path('api/products', product_list),
    path('api/products/<int:product_id>/', product_detail),
    path('api/categories', category_list),
    path('api/categories/<int:category_id>/', category_detail)
]