import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    text: string;
}

const Title: FC<Props> = ({ text }) => {
    return (
        <h2 className={styles.Text}>{text}</h2>
    )
}

export default Title