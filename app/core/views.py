from ninja import File
from ninja_extra import NinjaExtraAPI, api_controller, route
from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_jwt.authentication import JWTAuth
from ninja.files import UploadedFile
from typing import List
from ninja_jwt.tokens import RefreshToken
from ninja.responses import codes_4xx

from .schema import CreateProjectSchema, LogoutShema, ProjectSchema, DetailShema
from .models import Project

api = NinjaExtraAPI()

""" AUTH ( tokens ) """
api.register_controllers(NinjaJWTDefaultController)

@api.post("/logout", tags=['token'], auth=JWTAuth())
def logout(request, data: LogoutShema):
    base64_encoded_token_string = data.access
    token = RefreshToken(base64_encoded_token_string)
    token.blacklist()
    return 200, {"detail": "Logged out !?"}

""" PROJERCT """

@api_controller('project/', tags=['Projects'])
class ProjectAPI:
    # list
    @route.get("list", response={200: List[ProjectSchema], codes_4xx: DetailShema})
    def projects(self, request, draft: bool):
        queryset = Project.objects.all()
        if not draft:
            queryset = queryset.filter(draft=False)
        return queryset
    
    # get 
    @route.get("details/{str:slug}", response={200: ProjectSchema, codes_4xx: DetailShema})
    def details(self, request, slug):
        project = Project.objects.get(slug=slug)
        return project
    
    # create 
    @route.post("create", auth=JWTAuth(), response={ 200: ProjectSchema, codes_4xx: DetailShema})
    def create(self, request, data: CreateProjectSchema):
        project = Project.objects.create(**data.dict(), author=request.user)
        return project
    
    # update
    @route.put("update/{str:slug}", auth=JWTAuth(), response={ 200: ProjectSchema, codes_4xx: DetailShema})
    def change(self, request, slug, data: CreateProjectSchema):
        project = Project.objects.get(slug=slug)
        for attr, value in data.dict(exclude_unset=True).items():
            setattr(project, attr, value)
        project.save()
        return project

    
    # delete
    @route.delete("delete/{str:slug}",  auth=JWTAuth(), response={ 200: DetailShema, codes_4xx: DetailShema })
    def remove(self, request, slug):
        project = Project.objects.get(slug=slug)
        project.delete()
        return 200, {"detail": "Deleted successfully :)"}
    
api.register_controllers(ProjectAPI)