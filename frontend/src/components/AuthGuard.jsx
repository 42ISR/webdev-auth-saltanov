import { useEffect } from "react"
import { useUserStore } from "../store/useUserStore"
import { Navigate, useNavigate } from "react-router-dom"

export const AuthGuard = ({ children }) => {
    const {user} = useUserStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user?.token) navigate("/signin")
    }, [])

    if (!user?.token) return <></>

    return children
}