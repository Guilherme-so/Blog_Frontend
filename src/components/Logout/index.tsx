import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '../../services/axios'


function LogoutComp() {
    const router = useRouter()

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/',{
        refresh_token: localStorage.getItem('refresh_token')
        })
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        axiosInstance.defaults.headers['Authorization'] = null
        router.push('/login')
    },[])

  return (
    <div>Logout</div>
  )
}

export default LogoutComp