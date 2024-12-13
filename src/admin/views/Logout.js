import React, { useEffect } from "react"
import { logout } from "../../service/auth.service"
import { useNavigate } from "react-router-dom"


const UserLogout = () => {
    const navigation = useNavigate();
    useEffect(() => {
        logout('user')
        navigation('/user-login')
    }, [])
    return  ''
}
export default UserLogout