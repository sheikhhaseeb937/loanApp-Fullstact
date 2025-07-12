



import InputOtp from "../auth/InputOtp"
import Signup from "../auth/Signup"

const Otproute = ()=>{
    const email = localStorage.getItem('email')
 


    return(
        email ? <InputOtp/> : <Signup/>

    )
}
export default Otproute
