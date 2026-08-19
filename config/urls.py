from django.urls import path
from siteapp.views import home
urlpatterns=[path("",home,name="home")]
