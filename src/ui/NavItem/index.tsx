import { MenuItemType } from "@/types"
import { fillNavIcon } from "@/utils"
import { FC } from "react"
import Label from "../Text/Label"
import styles from "./style.module.css"

interface Props {
    item: MenuItemType
}

const NavItem: FC<Props> = ({ item }) => {
    return (
        <div className={styles.Item}>
            {fillNavIcon(item.icon)}
            <Label text={item.label} />
        </div>
    )
}

export default NavItem