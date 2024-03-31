'use client'
import ProjectsCard from "@/components/project/Projects";
import useProjects from "@/hooks/project/useProjects";

const Projects = ()=> {
    const { projects, isLoading, mutate  }= useProjects(false)
    return (
        <section className="mx-auto container py-5">
            <ProjectsCard projects={projects} mutate={mutate} canEdit={false} /> 
        </section>
    )
}

export default Projects;