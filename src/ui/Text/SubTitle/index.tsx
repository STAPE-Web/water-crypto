import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    text: string;
}

const SubTitle: FC<Props> = ({ text }) => {
    return (
        <h4 className={styles.Text}>{text}</h4>
    )
}

export default SubTitle