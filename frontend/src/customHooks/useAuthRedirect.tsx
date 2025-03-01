import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = () => {
    const navigate = useNavigate()

    useEffect (()=>{
        const user = localStorage.getItem('user')
        if (!user) {
            navigate('/auth')
        }
    }, [])
}

export default useAuthRedirect