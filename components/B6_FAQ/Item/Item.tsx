import {FC} from "react";
import style from "./Item.module.scss"
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";

interface IItem {
    index: number
    q: string
    a: string | JSX.Element
}

export const Item: FC<IItem> = observer(({index, q, a}) => {
    const {faqIndex, setFaqIndex} = useStore();

    return (
        <div className={style.item}>
            <div className={style.questionBlock}>
                <p className={style.question}>{q}</p>
                <button className={style.btn}
                        onClick={() => setFaqIndex(index)}
                >
                    {faqIndex === index ? svgIcons.minus : svgIcons.plus}
                </button>
            </div>
            <div className={clsx({
                [style.answerBlock]: true,
                [style.answerBlock_show]: faqIndex === index,
            })}>
                {
                    typeof a === "string"
                        ? <p>{a}</p>
                        : a
                }
            </div>
        </div>
    )
})