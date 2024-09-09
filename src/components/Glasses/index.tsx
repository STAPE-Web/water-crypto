import useGlobalStore from "@/store"
import Glass from "@/ui/Glass"
import styles from "./style.module.css"

const Glasses = () => {
    const { content } = useGlobalStore()

    return (
        <div className={styles.Glasses}>
            {content?.waterGlasses.map((item, index) => (
                <Glass key={index} item={item} />
            ))}
        </div>
    )
}

export default Glasses