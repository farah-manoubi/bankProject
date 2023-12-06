import style from "./banner.module.scss"

export const Banner = () =>{
    return (
        <>
            <div className={style.hero}>
                <section className={style.content}>
                    <h2 className={style.srOnly}>Promoted Content</h2>
                    <p className={style.subtitle}>No fees.</p>
                    <p className={style.subtitle}>No minimum deposit.</p>
                    <p className={style.subtitle}>High interest rates.</p>
                    <p className={style.text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            
        </>
    )

}