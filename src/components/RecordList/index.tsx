import useGlobalStore from "@/store"
import RecordItem from "@/ui/RecordItem"
import styles from "./style.module.css"

const RecordList = () => {
    const { records } = useGlobalStore()

    return (
        <div className={styles.RecordList}>
            {records?.records.map((item, index) => (
                <RecordItem key={index} item={item} />
            ))}
        </div>
    )
}

export default RecordList