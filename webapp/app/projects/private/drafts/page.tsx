'use client';
import ProjectsCard from "@/components/project/Projects";
import useProjects from "@/hooks/project/useProjects";
import Link from "next/link";
import { MdAdd } from "react-icons/md";

const DraftProjects = ()=> {

    const { projects, isLoading, mutate  }= useProjects(true)

    return(
        <section className="container mx-auto py-5">
            <div>
                <button className="bg-gray-800 text-white rounded-sm w-fit py-1 px-3">
                    <Link href={"/projects/private/add"}>
                        <span className="w-full flex flex-row justify-center items-center space-x-3">
                            <MdAdd className="text-lg font-semibold" />
                            <p className="text-sm font-semibold">Add</p>
                        </span>
                    </Link>
                </button>
            </div>

            <div className="my-5">
                <ProjectsCard projects={projects} mutate={mutate} canEdit={true} /> 
            </div>

        </section>
    )
}

export default DraftProjects;