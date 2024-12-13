import React, { useEffect } from "react"
import { logout } from "../../service/auth.service"
import { useNavigate } from "react-router-dom"


const DoctorLogout = () => {
    const navigation = useNavigate();
    useEffect(() => {
        logout('doctor')
        navigation('/doctor-login')
    }, [])
    return  ''
}
export default DoctorLogout