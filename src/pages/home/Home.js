import { Banner } from "../../components/banner/Banner"
import { Feature } from "../../components/feature/Feature"
import style from "./home.module.scss"

export const Home = () =>{
    return (
        <>
            <main className={style.main}>
                <Banner />
                <Feature />
            </main>
        </>
    )

}