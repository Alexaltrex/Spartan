import style from "./Logos.module.scss"
import clsx from "clsx";
import {FC} from "react";

const logos = [
    "/spartan is massive/0.png",
    "/spartan is massive/1.png",
    "/spartan is massive/2.png",
    "/spartan is massive/3.png",
    "/spartan is massive/4.png",
    "/spartan is massive/5.png",
    "/spartan is massive/6.png",
    "/spartan is massive/7.png",
    "/spartan is massive/8.png",
    "/spartan is massive/9.png",
    "/spartan is massive/10.png",
    "/spartan is massive/11.png",
    "/spartan is massive/12.png",
];

interface ILogos {
    className?: string
}

export const Logos: FC<ILogos> = ({className}) => {
    return (
        <div className={clsx(style.logos, Boolean(className) && className)}>
            {
                logos.map((src, index) => (
                    <div className={style.item} key={index}>
                        <img src={src} alt=""/>
                    </div>
                ))
            }
        </div>
    )
}