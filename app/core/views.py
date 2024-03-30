from ninja_extra import NinjaExtraAPI, api_controller, route
from .models import Project

api = NinjaExtraAPI()

""" AUTH """

""" PROJERCT """
@api_controller('projects/', tags=['Projects'], permissions=[])
class ProjectAPI:
    # list
    @route.get("list")
    def projects(self, request):
        return {"detail":"Hello"}
    
    # create 
    # get 
    # delete
    # update
    
api.register_controllers(ProjectAPI)