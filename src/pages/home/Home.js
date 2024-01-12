import { useEffect } from "react"
import { Banner } from "../../components/banner/Banner"
import { Feature } from "../../components/feature/Feature"
import style from "./home.module.scss"
import { saveToken, userConnected, userSignOut } from "../../redux/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Home = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const getUserProfile = async (token) =>{
        const resp = await fetch (
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + token
                }
            }
        )


        //Si le jeton n'a pas expiré on garde l'utilisateur connecté et on le renvoi à la page de profile
        if(resp.status !== 401) { 
            const dataUser = await resp.json()
            dispatch(userConnected({firstName: dataUser.body.firstName, lastName: dataUser.body.lastName}))
            navigate("/profile")
        } else {
            //Si le jeton a expiré on deconnect l'utilisateur
            dispatch(userSignOut())
        }

        
    }

    useEffect(() =>{
        if(localStorage.getItem('token')){
            dispatch(saveToken(localStorage.getItem('token')))
            getUserProfile(localStorage.getItem('token'))
        }

    }, [localStorage])

    
    return (
        <>
            <main className={style.main}>
                <Banner />
                <Feature />
            </main>
        </>
    )

}