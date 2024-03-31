'use client'
import useProjects from "@/hooks/project/useProjects";
import { creator } from "@/services/utils";
import { ProjectType } from "@/type/project.type";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlinePhoto } from "react-icons/md";

const CreateProject = ()=> {
    const { mutate  }= useProjects(true)
    const router = useRouter()
    
    const [ name, setName ] = useState<string>()
    const [ description, setDescription ] = useState<string>()
    const [ draft, setDraft ] = useState<boolean>(true)
    const [ github_url, setGithubUrl ] = useState<string>()
    const [ website_url, setWebsiteUrl ] = useState<string>()
    const [ loading, setLoading ] = useState<boolean>(false)

    const handleCreatingProject = async(e: React.SyntheticEvent)=> {
        e.preventDefault()
        const data = { name, description, website_url, github_url, draft }
        setLoading(true)
        const response = await creator("/project/create", data) as AxiosResponse<ProjectType>
        setLoading(false)
        if (response?.status === 200){
            await mutate()
            await router.push("/projects/private/drafts")
        }

    }

    return(
        <section className="container mx-auto py-5">
            <div>
                <button onClick={()=> router.back()} type="button"
                    className="hover:bg-gray-800 hover:text-white text-gray-800 rounded-sm w-fit py-1 px-3">
                    <IoMdArrowRoundBack className="text-lg font-semibold" />
                </button>
            </div>

            <div className="mt-5">
                <form className="space-y-3" onSubmit={handleCreatingProject}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-800">
                            Project Name
                        </label>
                        <div className="mt-1">
                            <input
                            id="name" type="text" autoComplete="email" required
                            value={name} onChange={(e)=> setName(e.target.value)}
                            className="block w-full rounded-md border p-1.5 text-gray-800 shadow-sm border-gray-300
                            placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="github_url" 
                            className="block text-sm font-medium leading-6 text-gray-800">
                            Github Url
                        </label>
                        <div className="mt-1">
                            <input
                            id="github_url" type="url" required
                            value={github_url} onChange={(e)=> setGithubUrl(e.target.value)}
                            className="block w-full rounded-md border p-1.5 text-gray-800 shadow-sm border-gray-300
                            placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="website_url" 
                            className="block text-sm font-medium leading-6 text-gray-800">
                            Website Url
                        </label>
                        <div className="mt-1">
                            <input
                            id="website_url" type="url" required
                            value={website_url} onChange={(e)=> setWebsiteUrl(e.target.value)}
                            className="block w-full rounded-md border p-1.5 text-gray-800 shadow-sm border-gray-300
                            placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="descrpion" 
                            className="block text-sm font-medium leading-6 text-gray-800">
                            Description
                        </label>
                        <div className="mt-1">
                            <textarea
                            id="descrpion" required rows={7}
                            value={description} onChange={(e)=> setDescription(e.target.value)} 
                            className="block w-full rounded-md border p-1.5 text-gray-800 shadow-sm border-gray-300
                            placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none">
                            </textarea>
                        </div>
                    </div>

                    <div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="flex w-fit justify-center rounded-sm bg-gray-700 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm 
                            hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 disabled:bg-gray-400">
                            Create
                        </button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default CreateProject;