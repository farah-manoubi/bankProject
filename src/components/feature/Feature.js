import style from "./feature.module.scss"
import cat from "../../assets/icon-chat.png"
import money from "../../assets/icon-money.png"
import security from "../../assets/icon-security.png"
export const Feature = () =>{
    return (
        <>
            <section className={style.features}>
                <h2 className={style.srOnly}>Features</h2>
                <div className={style.item}>
                    <img src={cat} alt="Chat Icon" className={style.icon} />
                    <h3 className={style.title}>You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className={style.item}>
                    <img
                        src={money}
                        alt="Chat Icon"
                        className={style.icon}
                    />
                    <h3 className={style.title}>More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className={style.item}>
                    <img
                        src={security}
                        alt="Chat Icon"
                        className={style.icon}
                    />
                    <h3 className={style.title}>Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
            
        </>
    )

}