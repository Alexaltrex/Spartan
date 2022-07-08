import style from "./ThisIsNot.module.scss";
import {svgIcons} from "../../assets/svgIcons";

const title1 = "THIS IS NOT FOR EVERYONE.";
const title2 = "GET EXCLUSIVE ACCESS TO OUR HOLDER BENEFITS";

const items = [
    {
        title: "Track the hottest projects",
        text: "Get access to all of the public projects currently active on PREMINT and alpha on which lists are growing the fastest.",
        icon: svgIcons.thisIsNot0,
    },
    {
        title: "Newsletter",
        text: "Subscribe to a token-gated newsletter to stay informed about upcoming mint dates and trending projects.",
        icon: svgIcons.thisIsNot1,
    },
    {
        title: "See what you qualify for",
        text: "PREMINT will show you what projects you’re eligible for based on your NFT collection and help get you on the list.",
        icon: svgIcons.thisIsNot2,
    },
    {
        title: "Private calendar feed",
        text: "Access your personalized calendar feed showing registration times and mint dates for all projects on the platform.",
        icon: svgIcons.thisIsNot3,
    },
    {
        title: "Beta Access",
        text: "Get early access to upcoming PREMINT public collector features before anyone else has access to them.",
        icon: svgIcons.thisIsNot4,
    },
    {
        title: "Guaranteed access for 2024",
        text: "Founder’s Edition Collector Pass holders are guaranteed a spot to mint the 2024 Collector Pass.",
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