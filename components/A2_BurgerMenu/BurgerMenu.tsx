import style from "./BurgerMenu.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import clsx from "clsx";
import {links} from "../A0_Header/Header";
import Link from "next/link";
import {SocialLinks} from "../C0_SocialLinks/SocialLinks";

export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_show]: burgerMenu,
        })}>
            <div className={style.links}>
                {
                    links.map(({label, href}, index) => (
                            <Link href={href} key={index}>
                                <a className={style.link}
                                   onClick={() => setBurgerMenu(false)}
                                >
                                    {label}
                                </a>
                            </Link>
                        )
                    )
                }
            </div>
            <SocialLinks className={style.socialLinks}/>

        </div>
    )
})