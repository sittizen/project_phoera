from django.db import models
from rest_framework import serializers


class Book(models.Model):
    book_id = models.IntegerField()
    title = models.CharField(max_length=256)
    revision = models.IntegerField(default=0)

    class Meta:
        unique_together = ('book_id', 'revision')


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'book_id', 'title', 'revision',)
