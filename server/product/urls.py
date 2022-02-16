from django.urls import path, include

from product import views

urlpatterns = [
    path("new-products/", views.NewProductsList.as_view()),
    path("products/search/", views.search),
    path(
        "products/<slug:category_slug>/<slug:product_slug>/",
        views.ProductDetail.as_view(),
    ),
    path("categories/", views.CategoryList.as_view()),
    path("categories/<slug:category_slug>/", views.CategoryDetail.as_view()),
]
