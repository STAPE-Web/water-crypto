import Images from "@/assets/images"
import Icons from "@/ui/Icons"

export function fillGlass(isFilled: boolean) {
    if (isFilled) {
        return <img src={Images.BGlass} alt="" />
    } else {
        return <img src={Images.WGlass} alt="" />
    }
}

export function fillRecordType(type: string) {
    switch (type) {
        case "clock": return <Icons.Clock />;
        case "water_crypto": return <Icons.WaterBTC />;
    }
}

export function fillNavIcon(type: string) {
    switch (type) {
        case "home": return <Icons.Glass />;
        case "balance": return <Icons.Wallet />;
        case "tasks": return <Icons.Tasks />;
    }
}