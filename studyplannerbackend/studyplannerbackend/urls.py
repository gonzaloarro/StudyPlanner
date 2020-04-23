from django.urls import path, include

urlpatterns = [
    path('', include('studyplanner.urls')),
    path('auth/', include('knox.urls')),
]
