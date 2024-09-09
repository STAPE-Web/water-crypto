export type HomeContentType = {
    title: string,
    dailyGoal: {
        description: string,
        current: number,
        total: number
    },
    waterGlasses: WaterGlassesType[],
    drinkWater: {
        label: string,
        icon: string
    },
    menu: {
        items: MenuItemType[]
    }
}

export type WaterGlassesType = {
    id: number,
    filled: boolean,
    reward: string
}

export type MenuItemType = {
    label: string,
    icon: string
}

export type RecordsType = {
    title: string,
    records: RecordType[]
}

export type RecordType = {
    time: string,
    description: string,
    icon: string,
    glasses: number
}