import style from "./Header.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import Link from "next/link";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {SocialLinks} from "../C0_SocialLinks/SocialLinks";
import clsx from "clsx";

export const links = [
    {label: "Benefits", href: "/#benefits"},
    {label: "Roadmap", href: "/#roadmap"},
    {label: "Schedule", href: "/#schedule"},
];

export const Header = observer(() => {
    const {burgerMenu, setBurgerMenu, hideHeader} = useStore();

    return (
        <header className={clsx({
            [style.header]: true,
            [style.header_hide]: hideHeader && !burgerMenu,
        })}>
            <div className={style.inner}>
                <div className={style.leftBlock}>
                    {svgIcons.logo}
                </div>
                <div className={style.rightBlock}>
                    <nav className={style.links}>
                        {
                            links.map(({label, href}, index) => (
                                    <Link href={href} key={index}>
                                        <a className={style.link}>{label}</a>
                                    </Link>
                                )
                            )
                        }
                    </nav>

                    <SocialLinks className={style.socialLinks}/>

                    <button className={style.burgerBtn}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                    >
                        {burgerMenu ? svgIcons.close : svgIcons.menu}
                    </button>

                </div>
            </div>
        </header>
    )
})