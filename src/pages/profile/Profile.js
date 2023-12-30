import { useSelector } from "react-redux"
import { Account } from "../../components/account/Account"
import style from "./profile.module.scss"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import {userConnected} from "../../redux/userSlice"

export const Profile = () =>{

    const user = useSelector((state) => state.user)
    const {userInfo} = user;
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [userData, setUserData] = useState({firstName: userInfo?.firstName, lastName: userInfo?.lastName})
    const dispatch = useDispatch();

    useEffect(() =>{
        if(!user.token) {
            navigate("/")
        }
    }, [user, navigate])

    const editName = () =>{
        setIsEditing(!isEditing)
    }

    const cancelEdit = () =>{
        setIsEditing(false)
    }

    const changeData = (e) =>{
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        })
    }

    const saveEdit = async (e) =>{
        e.preventDefault()
        const resp = await fetch (
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                body: JSON.stringify({
                    firstName: userData.firstName,
                    lastName: userData.lastName
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer" + user.token
                }
            }
        )
        const data = await resp.json()
        dispatch(userConnected({...user, firstName: data.body.firstName, lastName: data.body.lastName}))
        setIsEditing(false)
    }

    return(
        <>
        <main className={style.bgDark}>
            {!isEditing ? (
                    <div className={style.header}>
                        <h1>Welcome back <br />{user.firstName} {user.lastName} !</h1>
                        <button className={style.editButton} onClick={editName}>Edit Name</button> 
                    </div>
                ) : (
            
                    <div className={style.header}>
                        <h1>Welcome back</h1>
                    
                            <div className={style.containerLbl}>
                                <label htmlFor="firstName"><input type="text" id="firstName" placeholder={user.firstName} onChange={changeData}/></label>
                                <label htmlFor="lastName"><input type="text" id="lastName" placeholder={user.lastName} onChange={changeData} /></label>       
                            </div>
                    
                        <div className={style.containerBtn}>
                            <button onClick={saveEdit} className={style.editButton}>Save</button>
                            <button onClick={cancelEdit} className={style.editButton}>Cancel</button>
                        </div>
                    </div> 
            )}
            <Account />
        </main>
     </>
    )
}