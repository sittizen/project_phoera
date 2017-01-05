from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication

from project_phoera.app.core.models import Book, BookSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAdminUser,)
