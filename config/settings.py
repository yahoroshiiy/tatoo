from pathlib import Path
import os
BASE_DIR=Path(__file__).resolve().parent.parent
SECRET_KEY=os.getenv("SECRET_KEY","demo-secret-key-change-in-production")
DEBUG=os.getenv("DEBUG","False").lower()=="true"
ALLOWED_HOSTS=["*"]
ROOT_URLCONF="config.urls"
MIDDLEWARE=["django.middleware.security.SecurityMiddleware","whitenoise.middleware.WhiteNoiseMiddleware","django.middleware.common.CommonMiddleware"]
INSTALLED_APPS=["django.contrib.staticfiles","siteapp"]
TEMPLATES=[{"BACKEND":"django.template.backends.django.DjangoTemplates","DIRS":[],"APP_DIRS":True,"OPTIONS":{"context_processors":[]}}]
WSGI_APPLICATION="config.wsgi.application"
STATIC_URL="/static/"
STATIC_ROOT=BASE_DIR/"staticfiles"
STATICFILES_DIRS=[BASE_DIR/"siteapp"/"static"]
STATICFILES_STORAGE="django.contrib.staticfiles.storage.StaticFilesStorage"
STORAGES={"staticfiles":{"BACKEND":"django.contrib.staticfiles.storage.StaticFilesStorage"}}
DEFAULT_AUTO_FIELD="django.db.models.BigAutoField"
