from django.urls import path, include

from product import views

urlpatterns = [
    path("new-products/", views.NewProductsList.as_view()),
    path(
        "products/<slug:category_slug>/<slug:product_slug>/",
        views.ProductDetail.as_view(),
    ),
    path("categories/", views.CategoryList.as_view()),
]
