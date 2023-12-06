import style from "./signIn.module.scss"
import { Formulaire } from "../../components/formulaire/Formulaire"


export const SignIn = () =>{
    return (
        <>
           <main className={style.bgDark}>
                <Formulaire />
           </main>
        </>
    )

}