import { getter } from "@/services/utils";
import { ProjectType } from "@/type/project.type";
import { AxiosResponse } from "axios";
import useSWR from "swr";

const useProjects = (published: boolean )=> {
    const { data, isLoading, mutate } = useSWR(`/project/list?draft=${published}`, getter)

    const response = data as AxiosResponse<Array<ProjectType>>
    let projects: Array<ProjectType> | null = null

    if (response?.status === 200){
        projects = response?.data
    }
    return { projects, isLoading, mutate }
}

export default useProjects;