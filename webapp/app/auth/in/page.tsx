'use client'
import { useAppAuth } from '@/contexts/Auth/AuthProvider'
import { creator } from '@/services/utils'
import { LoginResponse } from '@/type/auth.type'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import {  useEffect, useState } from 'react'

const Login = ()=> {
    const router = useRouter()
    const { storeTokens, authorized } = useAppAuth()
    const [ email, setEmail ] = useState<string>()
    const [ password, setPassword ] = useState<string>()
    const [ loading, setLoading ] = useState<boolean>()


    const handleLogin = async(e: React.SyntheticEvent)=> {
        e.preventDefault()
        setLoading(true)
        const response = await creator("/token/pair", { email, password }) as AxiosResponse<LoginResponse>
        setLoading(false)
        if (response?.status === 200 ){
            console.log(response?.data)
            storeTokens({ access: response?.data.access, refresh: response?.data?.refresh})
            router.push("/projects/private/drafts")
        }

    }

    useEffect(()=> {
        if(authorized){
            router.push("/projects/private/drafts")
        }
    }, [authorized])

    return (
        <section className="mx-auto container">
            <div className="flex h-full flex-1 flex-col justify-center p-6 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                id="email" name="email" type="email" autoComplete="email" required
                                value={email} onChange={(e)=> setEmail(e.target.value)}
                                className="block w-full rounded-md border p-1.5 text-gray-900 shadow-sm border-gray-300
                                placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" 
                                className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                id="password" name="password" type="password" required
                                value={password} onChange={(e)=> setPassword(e.target.value)}
                                className="block w-full rounded-md border p-1.5 text-gray-900 shadow-sm border-gray-300
                                placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-gray-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
                                hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 disabled:bg-gray-400">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;