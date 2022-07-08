import type {NextPage} from 'next'
import style from "./index.module.scss"
import Head from "next/head";
import {Header} from "../components/A0_Header/Header";
import {GlobalPass} from "../components/B0_GlobalPass/GlobalPass";
import {MintSoldOutTop} from "../components/B1_MintSoldOutTop/MintSoldOutTop";
import {SpartanIsMassive} from "../components/B2_SpartanIsMassive/SpartanIsMassive";
import {ThisIsNot} from "../components/B3_ThisIsNot/ThisIsNot";
import {Roadmap} from "../components/B4_Roadmap/Roadmap";
import {MintSchedule} from "../components/B5_MintSchedule/MintSchedule";
import {FAQ} from "../components/B6_FAQ/FAQ";
import {MintSoldOutBottom} from "../components/B7_MintSoldOutBottom/MintSoldOutBottom";
import {Footer} from "../components/A1_Footer/Footer";
import {useCallback, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../store/useStore";
import {BurgerMenu} from "../components/A2_BurgerMenu/BurgerMenu";
import clsx from "clsx";

const IndexPage: NextPage = observer(() => {
    const {setHideHeader, burgerMenu} = useStore();

    const [scrollTop, setScrollTop] = useState(0);


    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);
        return () => window.removeEventListener('scroll', onScrollHandler);
    }, [scrollTop]);

    const onScrollHandler = useCallback((e: any) => {
        const newScrollTop = window.scrollY;
        if (newScrollTop > scrollTop && newScrollTop > 100) {
            setHideHeader(true);
        } else {
            setHideHeader(false);
        }
        setScrollTop(newScrollTop);
    }, [scrollTop]);

    return (
        <div className={clsx({
            [style.indexPage]: true,
            [style.indexPage_lock]: burgerMenu,
        })}
        >
            <Head>
                <meta charSet="utf-8"/>
                <title>Spartan</title>
            </Head>

            <Header/>

            <BurgerMenu/>

            <main className={style.main}
            >
                <GlobalPass/>
                <MintSoldOutTop/>
                <SpartanIsMassive/>
                <ThisIsNot/>
                <Roadmap/>
                <MintSchedule/>
                <FAQ/>
                <MintSoldOutBottom/>
            </main>
            <Footer/>

        </div>
    )
})

export default IndexPage
