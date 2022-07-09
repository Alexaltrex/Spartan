import style from "./MintSoldOutBottom.module.scss"

const text = "Thanks to everyone for becoming a UNBREAKABLE Collector Pass holder! Looking for a pass? Check out secondary listings on OpenSea!"

export const MintSoldOutBottom = () => {
    return (
        <div className={style.mintSoldOutBottom}>
            <div className={style.inner}>
                <h2 className={style.title}>Mint sold out!</h2>
                <p className={style.text}>{text}</p>
                <button className={style.btn}>
                    buy on opensea
                </button>
            </div>
        </div>
    )
}