from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response


from app.models import Message
from app.serializers import MessageSerializer


def home(request):
    messages = Message.objects.all().order_by('-timestamp')

    context = {
        'init_js_data': {
            'messages': MessageSerializer(instance=messages, many=True).data
        }
    }

    return render(request, 'app/home.html', context)


@api_view(['POST'])
def create_message(request):
    message = Message.objects.create(message=request.data.get('message'))

    return Response({'success': True, 'messageId': message.id})
