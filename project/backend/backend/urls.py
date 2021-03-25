"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views                      # add this
from register import vws_register
from user import vws_account
from employee import vws_employee
from master import vws_master
from rest_framework_jwt.views import obtain_jwt_token
#importing for opening media file in browser eg picture
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()                      # add this
router.register(r'todos', views.TodoView, 'todo')
router.register(r'employee', vws_register.EmployeeView, 'register.EmployeeView')
router.register(r'account', vws_account.AccountView, 'account')
router.register(r'employeelastid', vws_register.EmployeeLastIDSerializer, 'register.EmployeeLastIDSerializer')
router.register(r'employeedetail', vws_employee.EmployeeDetailView, 'employee')
router.register(r'masteremployee', vws_master.MasterEmployeeView, 'master.MasterEmployeeView')
#router.register(r'masterglobal', vws_master.MasterGlobalView, 'master.MasterGlobalView')
#passing parameter mst_global
#router.register(r'masterglobal/?P<condition>\d+)/$', vws_master.MasterGlobalView, 'master.MasterGlobalView')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('token-auth/', obtain_jwt_token)

]
#URL For Opening JPG 
urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)