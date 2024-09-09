import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    text: string;
}

const Label: FC<Props> = ({ text }) => {
    return (
        <p className={styles.Text}>{text}</p>
    )
}

export default Label