from ninja import Schema
from ninja.orm import create_schema
from .models import Project

class LogoutShema(Schema):
    access: str

ProjectSchema = create_schema(Project, 
                              fields=['name', 'description', 'github_url', 'website_url', 'image', 'slug', 'created', 'updated'],
                              optional_fields=['image', 'slug', 'created', 'updated'])

class CreateProjectSchema(Schema):
    name: str
    description: str
    github_url: str
    website_url: str

class DetailShema(Schema):
    detail: str