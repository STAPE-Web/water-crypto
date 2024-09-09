import Images from "@/assets/images"
import useGlobalStore from "@/store"
import Title from "@/ui/Text/Title"
import styles from "./style.module.css"

const Goal = () => {
    const { content } = useGlobalStore()
    const currentValue = `${content?.dailyGoal.current}/${content?.dailyGoal.total}`

    return (
        <div className={styles.Goal}>
            <img src={Images.Glass} alt="" />

            <div className={styles.Box}>
                <h3>{content?.dailyGoal.description}</h3>
                <Title text={currentValue} />
            </div>
        </div>
    )
}

export default Goal