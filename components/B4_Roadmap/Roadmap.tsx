import style from "./Roadmap.module.scss"
import clsx from "clsx";

const text = "As an UNBREAKABLE Pass Holder, you get access to an evolving ecosystem of Spartan benefits. See our roadmap below.";

const items = [
    {
        date: "8/8/22",
        title: "UNBREAKABLE GLOBAL PASS Mint",
        texts: [
            '$2500 for 3000 wallets on "whitelist", 2 mints maximum per wallet. (est. 3500-4000 sold)',
            'Whitelist will be given on Discord for those that invite others into the Discord and those that win contests for engagement.',
            `$3000 Public Sale for the remaining NFT's`,
            'There will be 300 Super Rare NFT passes to represent the "Spartan 300" with extra perks.',
            `Details: The UNBREAKABLE GLOBAL PASS will be good for 3 years. It can be extended for 2 additional years if the passholder attends all 3 "BE UNBREAKABLE" events. If the passholder does not attend all three events, they will have a limited time opportunity to purchase 2 more years at a discounted price. If they fail to do so, those 2 year passes will be made available for public sale as NFT's.`,
            `The "300" Super Rares will give a 10 Year Global Pass Access. This will give people a reason to buy and to buy more than 1 to try and get a Super Rare.`,
        ],
        checked: true,
    },
    {
        date: "11/11/22",
        title: "MERCH DROP",
        texts: [
            "Unbreakable branded Spartan Merchandise drop for NFT holders only! 10% of all sales go to Charity voted on by the Pass Holders. Spartan will select up to 5 Charity causes to contribute to and will let the NFT Holders vote on which one they would like to support. We can choose a new cause annually."
        ],
        checked: false,
    },
    {
        date: "1/1/23",
        title: "UNBREAKABLE PASS EVENT ACTIVATION",
        texts: ["Use your Digital NFT to access the Spartan registration pages for any event worldwide. The only thing Pass Holders pay are the fees."],
        checked: false,
    },
    {
        date: "3/3/23",
        title: "SPARTAN STATUE IN ANCIENT SPARTA",
        texts: [`Those who are worthy enough to mint an UNBREAKABLE GLOBAL PASS will have their name live on forever. A first of its kind statuehas been approved in Ancient Sparta on behalf of Spartan, paying homage to the Spartan 300. This has never been done before. Get ready to be enshrined in history.`],
        checked: false,
    },
    {
        date: "7/7/23",
        title: "AIRDROP",
        texts: [
            `The very first airdrop to our UNBREAKABLE Pass Holders. This NFT will be created by a world renowned artist and will be a one of a kind piece of art, all different to each NFT Holder. Tis can become your very own Spartan avatar for social profiles or to identify yourself with as a Spartan. The airdrop has to be claimed or it will go to the public for immediate sale.`,
        ],
        checked: false,
    },
    {
        date: "8/8/23",
        title: "BE UNBREAKABLE EVENT",
        texts: [
            `NFT Pass Holders Only!`,
            `This is an epic 3 day event where you will meet the owner of Spartan himself, have live training with some of the world's most elite athletes, celebrate together the success of the Spartan brand, and feast together daily. If you happen to be one of the top 300 NFT Pass Holders with the most completion certificates, you will have your own private UNBREAKABLE course to conquer together. This will be a yearly event for NFT Pass Holders.`
        ],
        checked: false,
    },
    // {
    //     date: "",
    //     title: "Future",
    //     text: "The NFT Benefits will continue to evolve over time, so secure your seat at the table. This is a DO NOT MISS opportunity.",
    //     checked: false,
    // },
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
                        items.map(({date, title, texts, checked}, index) => (
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
                                <div className={style.texts}>
                                    {
                                        texts.map((text, index) => <p key={index} className={style.text}>{text}</p>)
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}