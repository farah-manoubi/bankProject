import style from "./header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import {userSignOut} from "../../redux/userSlice"


export const Header = () =>{
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = (e) =>{
        e.preventDefault()
        dispatch(userSignOut())
        navigate("/")
    }
    
    return (
        <nav className={style.mainNav}>
            <NavLink to="/" className={style.logo}>
                <img
                    className={style.image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={style.srOnly}>Argent Bank</h1>
            </NavLink>
            <div>
                {!user.token && (
                    <NavLink to="/login" className={style.navItem}>
                        <FontAwesomeIcon icon={faCircleUser} className={style.icon} />
                        Sign In
                    </NavLink>
                )}

                {user.token && (
                <>
                
                    <NavLink to="/profile" className={style.navItem}>
                        <FontAwesomeIcon icon={faCircleUser} className={style.icon} />
                        {user.firstName}
                    </NavLink>
                    <NavLink onClick={logOut} className={style.navItem}>
                        <FontAwesomeIcon icon={faRightFromBracket} className={style.icon} />
                        SignOut
                    </NavLink>
                </>  
                )}
            </div>
        </nav>
    ) 
}