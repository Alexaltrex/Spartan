import style from "./MintSoldOutTop.module.scss"

const text = "Thanks to everyone for becoming a PREMINT Collector Pass holder! Looking for a pass? Check out secondary listings on OpenSea!";
const total = 15000;
const value = 1000;
const totalFormat =  new Intl.NumberFormat('en-En').format(total);
const valueFormat =  new Intl.NumberFormat('en-En').format(value);

export const MintSoldOutTop = () => {
    return (
        <div className={style.mintSoldOutTop}>
            <div className={style.inner}>
                <h3 className={style.title}>MINT IS LIVE</h3>
                {/*<p className={style.text}>{text}</p>*/}
                <div className={style.status}>
                    <div className={style.indicator}
                         style={{ width: `${100*value/total}%`}}
                    />
                </div>
                <p className={style.value}>
                    <span>{`${valueFormat} / ${totalFormat}`}</span> <span>supply remaining</span>
                </p>
            </div>
        </div>
    )
}