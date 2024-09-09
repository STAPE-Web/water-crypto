import { WaterGlassesType } from "@/types"
import { fillGlass } from "@/utils"
import { FC } from "react"

interface Props {
    item: WaterGlassesType
}

const Glass: FC<Props> = ({ item }) => {
    return (
        <div>{fillGlass(item.filled)}</div>
    )
}

export default Glass