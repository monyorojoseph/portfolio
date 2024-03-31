'use client'
import { creator } from "@/services/utils";
import { AxiosResponse } from "axios";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from "react";

interface TokenType {access: string, refresh: string}

interface AppAuthType {
    storeTokens: (token: TokenType)=> {};
    authorized: boolean;
    logout: Function;
}

const AppAuthContext = React.createContext({} as AppAuthType);

const restrictedPages = ['projects/private/*']


const AppAuthProvider = ({children}: { children: JSX.Element})=> {
    const router = useRouter()
    const pathname = usePathname()

    const [ authorized, setAuthorized ] = useState<boolean>(false)

    const storeTokens = async(token: TokenType )=> {
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem('expires', new Date(new Date().setDate(new Date().getDay() + 30)).toDateString())
        setAuthorized(true)
    }

    const refreshTokens = async ()=> {}

    const logout = async ()=> {
        const token = JSON.parse(localStorage.getItem('token')!); 
        if(token){
            const refresh = token['token']['refresh']
            const response = await creator("/logout/", { refresh }) as AxiosResponse;
            if (response?.status === 200){
                setAuthorized(false)
                localStorage.removeItem("token")
                localStorage.removeItem("expires")
            }
        }
    } 

    function isPageRestricted(page: string) {
        return restrictedPages.some(pattern => {
            // Convert wildcard * to a valid regular expression pattern
            const regexPattern = pattern.replace(/\*/g, '.*');
            const regex = new RegExp(`^${regexPattern}$`);
            return regex.test(page);
        });
    }

    useEffect(()=> {
        const expiry_date = localStorage.getItem('expires')
        const token = localStorage.getItem('token')

        if(expiry_date){
            if (!(new Date(localStorage.getItem('expires')!) > new Date())){
                // refresh tokens
                refreshTokens()
            }
        }

        if (token){
            setAuthorized(true)
        }

        // handle page restrictions
        if (pathname){
            const restrictedPage = isPageRestricted(pathname)
            if (restrictedPage ){
                if (!token){
                    router.push("auth/in")
                }
            }
        }

    }, [router])



    
    return (
        <AppAuthContext.Provider value={{authorized, storeTokens, logout }}>
            {children}
        </AppAuthContext.Provider>
    )
}

export default AppAuthProvider

export const useAppAuth = ()=> useContext(AppAuthContext)