from django.shortcuts import render

# Create your views here.

def index2(request):
    context = {}
    return render(request,"libros/index2.html",context)