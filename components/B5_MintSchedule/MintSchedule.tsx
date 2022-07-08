import style from "./MintSchedule.module.scss"

const items = [
    {
        time: "10:00 AM PST",
        date: "July 8, 2022",
        title: "Guaranteed Allowlist",
        text: "Wallets that won a guaranteed spot. Show up anytime in this window and easily mint your pass. If you don’t mint during this time, your pass may be claimed by someone on the Waitlist.",
    },
    {
        time: "10:00 AM PST",
        date: "August 8, 2022",
        title: "Waitlist",
        text: "Wallets that pre-registered on the PREMINT access list, but didn’t win a guaranteed spot, can mint during this time. First come, first serve.",
    },
    {
        time: "1:00 PM PST",
        date: "August 8, 2022",
        title: "Public",
        text: "Any wallet is eligible to mint during this period. Limited to 10 passes per wallet",
    },
]


export const MintSchedule = () => {
    return (
        <div className={style.mintSchedule} id="schedule">
            <div className={style.inner}>
                <h2 className={style.title}>Mint Schedule</h2>
                <p className={style.textLink}>
                    <a href="#"
                       rel="nofollow noopener noreferrer"
                    >
                        Click here
                    </a> <span>to check which list you’re on.</span>
                </p>

                <div className={style.headerItems}>
                    <p>TIME (US PACIFIC TIME)</p>
                    <p>MINT OPENS FOR</p>
                </div>


                <div className={style.items}>
                    {
                        items.map(({time, date, title, text}, index) => (
                            <div className={style.item} key={index}>
                                <div className={style.left}>
                                    <p className={style.time}>{time}</p>
                                    <p className={style.date}>{date}</p>
                                </div>
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