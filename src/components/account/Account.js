import style from "./account.module.scss"


export const Account = () =>{

    return(
        <>
        <section className={style.account}>
          <div className={style.contentWrapper}>
            <h3 className={style.title}>Argent Bank Checking (x8349)</h3>
            <p className={style.amount}>$2,082.79</p>
            <p className={style.accountAmountdes}>Available Balance</p>
          </div>
          <div className={style.contentWrapper}>
            <button className={style.transactionButton}>View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className={style.contentWrapper}>
            <h3 className={style.title}>Argent Bank Savings (x6712)</h3>
            <p className={style.amount}>$10,928.42</p>
            <p className={style.accountAmountdes}>Available Balance</p>
          </div>
          <div className={style.contentWrapper}>
            <button className={style.transactionButton}>View transactions</button>
          </div>
        </section>
        <section className={style.account}>
          <div className={style.contentWrapper}>
            <h3 className={style.title}>Argent Bank Credit Card (x8349)</h3>
            <p className={style.amount}>$184.30</p>
            <p className={style.accountAmountdes}>Current Balance</p>
          </div>
          <div className={style.contentWrapper}>
            <button className={style.transactionButton}>View transactions</button>
          </div>
        </section>
        </>
    )
}