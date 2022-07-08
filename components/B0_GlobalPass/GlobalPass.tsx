import style from "./GlobalPass.module.scss"
import {svgIcons} from "../../assets/svgIcons";

const title = "UNBREAKABLE GLOBAL PASS";
const text1 = "Get one of only 15,000 VIP Passes worldwide. This is Spartan's first truly global offering that will gain you access to the world's trails, obstacles, fitness challenges and cultures.";
const text2 = "There are NO LIMITS to the access this digital NFT will give you. You will have access to over 450 events globally in more than 50 countries around the world for up to 5 years!";

export const GlobalPass = () => {
    return (
        <div className={style.globalPass}>
            <div className={style.inner}>
                <div className={style.leftBlock}>
                    {svgIcons.cards}
                </div>
                <div className={style.rightBlock}>
                    <h1 className={style.title}>{title}</h1>
                    <div className={style.texts}>
                        <p className={style.text}>{text1}</p>
                        <br/>
                        <p className={style.text}>{text2}</p>
                    </div>
                    <button className={style.btn}>
                        buy on opensea
                    </button>
                </div>
            </div>
        </div>
    )
}