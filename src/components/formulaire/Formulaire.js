import style from "./formulaire.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {saveToken , userConnected} from "../../redux/userSlice"
import { useNavigate } from "react-router-dom";

export const Formulaire = () =>{
    const [userData, setUserData] = useState({email:"", password:""})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logIn = async (e) =>{
        e.preventDefault()
        const response = await fetch (
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        const data = await response.json()

        if(data && data.status === 200){
            
            const resp = await fetch (
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer" + data.body.token
                    }
                }
            )

            const dataUser = await resp.json()
            dispatch(saveToken(data.body.token))
            dispatch(userConnected({firstName: dataUser.body.firstName, lastName: dataUser.body.lastName}))
            navigate("/profile")
        }
        
    }
    
    const changeData = (e) =>{
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        })
    }

    return(
        <>
            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faCircleUser} className={style.signInicon} />
                <h1>Sign In</h1>
                <form onSubmit={logIn}>
                    <div className={style.inputWrapper}>
                        <label htmlFor="email">Username</label>
                        <input type="text" id="email" value={userData.email} onChange={changeData} />
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={userData.password} onChange={changeData} />
                    </div>
                    <div className={style.inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                <button className={style.signInButton} type="submit">Sign In</button>
                </form>
            </section>

        </>
    )
}