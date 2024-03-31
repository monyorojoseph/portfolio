'use client'
import { changer, destroyer } from "@/services/utils"
import { ProjectType } from "@/type/project.type"
import { AxiosResponse } from "axios"
import { useState } from "react"
import { FaEye, FaEyeSlash, FaGithub, FaLink } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

const ProjectsCard = ({projects, mutate, canEdit}: 
    {projects: Array<ProjectType> | null, mutate: Function, canEdit: boolean})=> {
    return (

    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16
        lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects?.map((project) => 
                <Project project={project} mutate={mutate} key={project.slug} canEdit={canEdit}/>)}
    </div>
    )
}
export default ProjectsCard


const Project = ({project, mutate, canEdit}: 
    { project: ProjectType, mutate: Function, canEdit: boolean})=> {
    const [ updating, setUpdating ] = useState<boolean>(false)
    const handleUpdate = async (data: any)=> {
        const newData = { ...project, ...data}
        setUpdating(true)
        const response = await changer(`/project/update/${project.slug}`, newData) as AxiosResponse
        setUpdating(false)
        if (response?.status === 200){
            await mutate()
        }

    }

    const handleDelete = async ()=> {
        setUpdating(true)
        const response = await destroyer(`/project/delete/${project.slug}`) as AxiosResponse
        setUpdating(false)
        if (response?.status === 200){
            await mutate()
        }

    }
    return(            
        <article key={project.slug} 
            className=" relative flex max-w-xl flex-col items-start justify-between">
            { canEdit &&
            <span 
                className="absolute top-0 right-0 w-fit p-1 flex flex-row items-center justify-center space-x-3">
                {project?.draft ?  
                <FaEyeSlash onClick={()=> handleUpdate({draft: false})}
                    className="cursor-pointer text-gray-900" /> : 
                <FaEye onClick={()=> handleUpdate({draft: true})}
                    className="cursor-pointer text-gray-900" />}

                <MdDelete onClick={handleDelete}
                    className="cursor-pointer text-red-600"/>
            </span>}
            {/* <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={project.created} className="text-gray-500">
                    {project.date}
                </time>
                <a
                href={project.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                {project.category.title}
                </a>
            </div> */}
            <div className="group relative">
                <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {project.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
            </div>
            <div className="mt-2 flex items-center gap-x-2">
                <a href={project.github_url}
                    className="relative rounded-sm bg-gray-100 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-200">
                        <FaGithub />
                </a>

                <a href={project.website_url}
                    className="relative rounded-sm bg-gray-100 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-200">
                        <FaLink />
                </a>
            </div>
        </article>
    )
}