from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
# Create your views here.

class UserView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = []
        queryset = User.objects.all() if user.groups.filter(name='admin') else User.objects.filter(id=user.id)
        
        for obj in queryset:
            data.append({
                "id": obj.id,
                "name": obj.username
            })
        
        return Response(data)

