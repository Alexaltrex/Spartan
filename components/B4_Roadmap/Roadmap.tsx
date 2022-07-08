import style from "./Roadmap.module.scss"
import clsx from "clsx";

const text = "As an UNBREAKABLE Pass Holder, you get access to an evolving ecosystem of Spartan benefits. See our roadmap below.";

const items = [
    {
        date: "August 8, 2022",
        title: "UNBREAKABLE Pass Mint",
        text: "Mint an UNBREAKABLE GLOBAL PASS",
        checked: true,
    },
    {
        date: "September 9, 2022",
        title: "Spartan-Wallet Beta",
        text: "Unbreakable Pass Holders will get early access to the new Spartan wallet where you generate completion NFT's at future events, and also be rewarded for your loyalty.",
        checked: true,
    },
    {
        date: "October 10, 2022",
        title: "Spartan App",
        text: "Unbreakable Pass Holders get first access to the Spartan App for the first year and free for the term of the pass.",
        checked: true,
    },
    {
        date: "January 1, 2023",
        title: "UNBREAKABLE PASS EVENT ACTIVATION",
        text: "Use your Digital NFT to access the Spartan registration pages for any event worldwide. ",
        checked: true,
    },
    {
        date: "August 8, 2023",
        title: "BE UNBREAKABLE EVENT",
        text: "NFT Pass Holders Only!\n" +
            "This is an epic 3 day event where you will meet the owner of Spartan himself, have live training with some of the world's most elite athletes, celebrate together the success of the Spartan brand, and feast together daily. If you happen to be one of the top 300 NFT Pass Holders with the most completion certificates, you will have your own private UNBREAKABLE course to conquer together. This will be a yearly event for NFT Pass Holders.",
        checked: true,
    },
    {
        date: "",
        title: "TBD",
        text: "Stay tuned for our very first airdrop to our UNBREAKABLE PAss Holders. This NFT will be created by a world renowned artist and will be a one of a kind piece of art all different to each NFT Holder.",
        checked: false,
    },
    {
        date: "",
        title: "Future",
        text: "The NFT Benefits will continue to evolve over time, so secure your seat at the table. This is a DO NOT MISS opportunity.",
        checked: false,
    },
]


export const Roadmap = () => {
    return (
        <div className={style.roadmap} id="roadmap">
            <div className={style.inner}>
                <div className={style.leftBlock}>
                    <h2 className={style.title}>roadmap</h2>
                    <p className={style.text}>{text}</p>
                </div>
                <div className={style.rightBlock}>
                    {
                        items.map(({date, title, text, checked}, index) => (
                            <div className={clsx({
                                [style.item]: true,
                                [style.item_checked]: index !== items.length - 1 && items[index + 1].checked,
                            })}
                                 key={index}
                            >
                                <div className={clsx({
                                    [style.dot]: true,
                                    [style.dot_checked]: checked,
                                })}/>

                                {date && <p className={style.date}>{date}</p>}
                                <p className={style.title}>{title}</p>
                                <p className={style.text}>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}