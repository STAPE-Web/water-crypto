import { RecordType } from "@/types"
import { fillRecordType } from "@/utils"
import { FC } from "react"
import SubTitle from "../Text/SubTitle"
import Label from "../Text/Label"
import Images from "@/assets/images"
import Icons from "../Icons"
import styles from "./style.module.css"

interface Props {
    item: RecordType
}

const RecordItem: FC<Props> = ({ item }) => {
    return (
        <div className={styles.RecordItem}>
            <div className={styles.Left}>
                {fillRecordType(item.icon)}

                <div className={styles.Box}>
                    <SubTitle text={item.time} />
                    {item.description !== "Пил воду" && <Label text={item.description} />}
                </div>
            </div>

            <div className={styles.Right}>
                <img src={Images.WGlass} alt="" />
                {item.description === "Пил воду" ? <Icons.Dots /> : <div />}
            </div>
        </div>
    )
}

export default RecordItem