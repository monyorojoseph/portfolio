from typing import Optional
from ninja import Schema
from ninja.orm import create_schema
from .models import Project

class LogoutShema(Schema):
    access: str

ProjectSchema = create_schema(Project, 
                              fields=['name', 'description', 'github_url', 'website_url', 'slug', 'created', 'updated', 'draft'],
                              optional_fields=["__all__"])

class CreateProjectSchema(Schema):
    name: str
    description: str
    github_url: str
    website_url: str
    draft: Optional[bool] = False

class DetailShema(Schema):
    detail: str