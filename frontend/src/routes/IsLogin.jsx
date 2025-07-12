
import { Navigate, Outlet, useNavigate } from "react-router-dom"





 const IsLogin = ()=> {

    const navigate = useNavigate()


    const Auth = !!localStorage.getItem('token')
    console.log(Auth)

    return (
        Auth ? <navigate to={'/'} /> : <Outlet />
    )

}
export default IsLogin