from django.urls import path, include

from product import views

urlpatterns = [
    path("new-products/", views.NewProductsList.as_view()),
]
