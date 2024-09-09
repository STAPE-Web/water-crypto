import useGlobalStore from "@/store"
import Title from "@/ui/Text/Title"
import Goal from "../Goal";
import Glasses from "../Glasses";
import Images from "@/assets/images";
import Icons from "@/ui/Icons";
import styles from "./style.module.css"
import { HomeContentType } from "@/types";

const DailyGoal = () => {
    const { content, changeContent } = useGlobalStore()

    function DrinkWater() {
        if (content !== null) {
            const newContent: HomeContentType = content
            if (newContent.dailyGoal.current < 10) {
                newContent.dailyGoal.current += 1
            }

            if (newContent.waterGlasses) {
                for (let i = newContent.waterGlasses.length - 1; i >= 0; i--) {
                    if (newContent.waterGlasses[i].filled === true) {
                        if (i + 1 < newContent.waterGlasses.length) {
                            newContent.waterGlasses[i + 1].filled = true;
                        }
                        break;
                    }
                }
            }

            changeContent(newContent)
        }
    }

    if (content === null) return;

    return (
        <div className={styles.DailyGoal}>
            <Icons.Settings className={styles.SettingsIcon} />
            <Title text={content?.title} />
            <Goal />
            <Glasses />

            <div className={styles.DrinkWater} onClick={() => DrinkWater()}>
                <img src={Images.DrinkWater} alt="" />
                <Title text={content?.drinkWater.label} />
            </div>
        </div>
    )
}

export default DailyGoal