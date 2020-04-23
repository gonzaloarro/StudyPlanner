from django.urls import path, include
from rest_framework.routers import DefaultRouter
from knox import views as knox_views
from . import views
from .views import RegistrationAPI, LoginAPI, UserAPI

router = DefaultRouter()
router.register(r'plans', views.PlanViewSet, 'plans')
router.register(r'events', views.EventViewSet, 'events')
router.register(r'notes', views.NoteViewSet, 'notes')
router.register(r'tasks', views.TaskViewSet, 'tasks')

urlpatterns = [
    path('api/', include(router.urls)),
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view()),
    path('user/', UserAPI.as_view())
]
