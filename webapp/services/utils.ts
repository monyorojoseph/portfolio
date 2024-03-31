import axios from "axios"

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});


axiosInstance.interceptors.request.use(
    async (config) => {
    if (typeof window !== 'undefined') {
        // Retrieve the access token from localStorage
        const token = JSON.parse(localStorage.getItem('token')!);  
        // Check if token exists and is valid
        if (token) {
            // Set the access token in the request headers for authorization
            config.headers.Authorization = `Bearer ${token['access']}`;
        }
    }
      return config;
    }
);


export const getter = async (url: string)=> {
    return axiosInstance.get(url).catch((error)=> console.log(error))
}

export const creator = async (url: string, data: any, hasFile: boolean = false)=> {
    const config = { headers: {  'Content-Type': hasFile ? 'multipart/form-data' : 'application/json' }}
    return axiosInstance.post(url, data, config).catch((error)=> console.log(error))
}

export const changer = async (url: string, data: any, hasFile: boolean = false )=> {
    const config = { headers: {  'Content-Type': hasFile ? 'multipart/form-data' : 'application/json' }}
    return axiosInstance.put(url, data, config).catch((error)=> console.log(error))
}

export const destroyer = async (url: string)=> {
    return axiosInstance.delete(url).catch((error)=> console.log(error))
}