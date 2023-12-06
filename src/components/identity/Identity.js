import style from "./identity.module.scss"

export const Identity = ({firstName, lastName}) =>{
    return(
        <div className={style.header}>
            <h1>Welcome back<br />{firstName} {lastName} !</h1>
            <button className={style.editButton}>Edit Name</button>
        </div>
    )
}