import style from "./Footer.module.scss";
import {SocialLinks} from "../C0_SocialLinks/SocialLinks";

const links = [
    {label: "Terms", href: "#"},
    {label: "Privacy policy", href: "#"},
]

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.inner}>
                <div className={style.first}>
                    <div className={style.links}>
                        {
                            links.map(({label, href}, index) => (
                                <a href={href} className={style.link} key={index}>{label}</a>
                            ))
                        }
                    </div>
                    <SocialLinks className={style.socialLinks}/>
                </div>
                <div className={style.second}>
                    © 2022 Spartan Race Inc. Established 2010 - Vermont
                </div>
            </div>
        </footer>
    )
}