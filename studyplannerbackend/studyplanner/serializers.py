from rest_framework import serializers
from .models import Plan, Event, Note, Task
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.core import exceptions
import django.contrib.auth.password_validation as validators


# Serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        user = User(**data)
        errors = dict()
        try:
            validators.validate_password(password=data.get('password'), user=User)
        except exceptions.ValidationError as e:
            raise serializers.ValidationError(list(e.messages))
        return super(CreateUserSerializer, self).validate(data)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], None, validated_data['password'])
        return user


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user:
            return user
        raise serializers.ValidationError("Error en los credenciales.")


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'date', 'duration', 'plan']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'description', 'date_and_time', 'completed', 'duration', 'category', 'priority', 'completed_at', 'plan']


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'text', 'plan']


class PlanSerializer(serializers.ModelSerializer):
    notes = NoteSerializer(many=True, read_only=True)
    events = EventSerializer(many=True, read_only=True)
    tasks = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = Plan
        fields = ['id', 'title', 'date_and_time', 'duration', 'events', 'notes', 'tasks']
