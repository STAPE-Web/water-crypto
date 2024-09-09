import Glass from "./svg/Glass";
import Clock from "./svg/Clock";
import Dots from "./svg/Dots";
import Settings from "./svg/Settings";
import Wallet from "./svg/Wallet";
import WaterBTC from "./svg/WaterBTC";
import Tasks from "./svg/Tasks";

const Icons: React.FC & {
    Clock: typeof Clock;
    Dots: typeof Dots;
    Glass: typeof Glass;
    Settings: typeof Settings;
    Wallet: typeof Wallet;
    WaterBTC: typeof WaterBTC;
    Tasks: typeof Tasks;
} = () => {
    return null;
};

Icons.Clock = Clock;
Icons.Dots = Dots;
Icons.Glass = Glass
Icons.Settings = Settings;
Icons.Wallet = Wallet;
Icons.WaterBTC = WaterBTC;
Icons.Tasks = Tasks;

export default Icons;