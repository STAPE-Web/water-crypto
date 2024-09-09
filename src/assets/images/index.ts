import Glass from "./glass.svg"
import BGlass from "./bGlass.svg"
import WGlass from "./wGlass.svg"
import DrinkWater from "./drinkWater.svg"

const Images: React.FC & {
    Glass: typeof Glass;
    BGlass: typeof BGlass;
    WGlass: typeof WGlass;
    DrinkWater: typeof DrinkWater;
} = () => {
    return null;
};

Images.Glass = Glass;
Images.BGlass = BGlass;
Images.WGlass = WGlass;
Images.DrinkWater = DrinkWater;

export default Images;