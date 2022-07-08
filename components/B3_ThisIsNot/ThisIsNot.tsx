import style from "./ThisIsNot.module.scss";
import {svgIcons} from "../../assets/svgIcons";

const title1 = "THIS IS NOT FOR EVERYONE.";
const title2 = "GET EXCLUSIVE ACCESS TO OUR HOLDER BENEFITS";

const items = [
    {
        title: "UNLIMITED ACCESS TO ALL SPARTAN EVENTS WORLDWIDE",
        text: "Trails, obstacles, fitness challenges, you decide: This global pass is for all Spartan events worldwide for  3-5 years.",
        icon: svgIcons.thisIsNot0,
    },
    {
        title: "EXCLUSIVE MERCH DROPS",
        text: "Unbreakable branded Spartan merchandise for NFT holders only.",
        icon: svgIcons.thisIsNot1,
    },
    {
        title: "ENSHRINE YOUR NAME IN HISTORY",
        text: "Those who mint this NFT will have their name inscribed on a statue dedicated to the “Spartan 300”  in Ancient Sparta.",
        icon: svgIcons.thisIsNot2,
    },
    {
        title: "FUTURE AIRDOP",
        text: "Details to come, however holders will be rewarded with a one-of-a-kind NFT created by a world renowned artist and airdropped into their wallet.",
        icon: svgIcons.thisIsNot3,
    },
    {
        title: "BE UNBREAKABLE EVENT",
        text: "This is an epic 3-day event at a surprise exclusive global location. This annual event is for NFT pass holders only.",
        icon: svgIcons.thisIsNot4,
    },
    {
        title: "VIP TREATMENT",
        text: "Special VIP services will be made available at specific events in certain markets.",
        icon: svgIcons.thisIsNot5,
    },
];

export const ThisIsNot = () => {
    return (
        <div className={style.thisIsNot} id="benefits">
            <div className={style.inner}>
                <div className={style.firstBlock}>
                    <h2 className={style.title}>
                        <p>{title1}</p>
                        <p>{title2}</p>
                    </h2>
                </div>
                <div className={style.secondBlock}>
                    {
                        items.map(({title, text, icon}, index) => (
                            <div className={style.item} key={index}>
                                {icon}
                                <div className={style.right}>
                                    <p className={style.title}>{title}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}