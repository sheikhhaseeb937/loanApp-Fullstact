import { Outlet } from "react-router-dom"
import Sigin from "../auth/Sigin"

const Auth = ()=>{
    const isAuth = !!localStorage.getItem('token')
    console.log(isAuth)


    return(
        isAuth ? <Outlet/> : <Sigin/>

    )
}
export default Auth
