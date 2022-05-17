from django.urls import path

from . import views

app_name = 'app'


urlpatterns = [
    path('', views.home, name='home'),
    path('api/add_message/', views.create_message, name='create-message'),
]
