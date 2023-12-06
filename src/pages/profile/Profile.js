import { useSelector } from "react-redux"
import { Account } from "../../components/account/Account"
import { Identity } from "../../components/identity/Identity"
import style from "./profile.module.scss"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Profile = () =>{

    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() =>{
        if(!user.token) {
            navigate("/")
        }
    }, [])


    return(
        <>
        <main className={style.bgDark}>
            <Identity 
                firstName={user.firstName} 
                lastName={user.lastName}
            />
            <Account />
        </main>
     </>
    )
}