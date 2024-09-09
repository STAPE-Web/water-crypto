import useGlobalStore from "@/store"
import SubTitle from "@/ui/Text/SubTitle"
import RecordList from "../RecordList";
import styles from "./style.module.css"

const Records = () => {
    const { records } = useGlobalStore()

    if (records === null) return;

    return (
        <div className={styles.Records}>
            <SubTitle text={records?.title} />
            <RecordList />
        </div>
    )
}

export default Records