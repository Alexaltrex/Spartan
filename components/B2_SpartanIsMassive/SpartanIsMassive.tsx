import style from "./SpartanIsMassive.module.scss"

const text = "SPARTAN is one of the most heavily used NFT services, loved by the entire web3 community."

const items = [
    {
        title: "10+M",
        subtitle: "COMMUNITY",
        text: "Spartan is a global fitness here like in the brand with a 10+ million strong community.",
    },
    {
        title: " 450+",
        subtitle: "GLOBAL EVENTS AND GROWING",
        text: "(add all the Spartan brands presentation spartan gave us)",
    },
    {
        title: "1,500,000 ",
        subtitle: "REGISTRATIONS",
        text: "Spartan brand events attract over 1.5 million registrants annually from over 50 countries.",
    },
    {
        title: "150,000",
        subtitle: "REPEAT REGISTRANTS",
        text: "There are over 150,000 registrants who register for multiple events per year.",
    },
    {
        title: "100 MILLION",
        subtitle: "We're on a mission to change 100 million lives.",
        text: "",
    },
]

export const SpartanIsMassive = () => {
    return (
        <div className={style.spartanIsMassive}>
            <div className={style.inner}>
                <h2 className={style.title}>spartan is massive</h2>
                <p className={style.text}>{text}</p>
                <div className={style.items}>
                    {
                        items.map(({title, subtitle, text}, index) => (
                            <div key={index}
                                 className={style.item}
                            >
                                <p className={style.title}>{title}</p>
                                <p className={style.subtitle}>{subtitle}</p>
                                {text && <p className={style.text}>{text}</p>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}