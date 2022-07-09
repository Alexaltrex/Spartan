import style from "./SocialLinks.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import {FC} from "react";
import clsx from "clsx";

const socialLinks = [
    { icon: svgIcons.spartan, href: "#" },
    { icon: svgIcons.discord, href: "#" },
    { icon: svgIcons.instagram, href: "#" },
    { icon: svgIcons.twitter, href: "#" },

];

interface ISocialLinks {
    className?: string
}

export const SocialLinks: FC<ISocialLinks> = ({className}) => {
    return (
        <div className={clsx(style.socialLinks, Boolean(className) && className)}>
            {
                socialLinks.map(({href, icon}, index) => (
                    <a key={index}
                       href={href}
                       target="_blank"
                       rel="nofollow noopener noreferrer"
                       className={style.socialLink}
                    >
                        {icon}
                    </a>
                ))
            }
        </div>
    )
}