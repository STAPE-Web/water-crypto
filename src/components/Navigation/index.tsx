import useGlobalStore from "@/store"
import NavItem from "@/ui/NavItem"
import styles from "./style.module.css"

const Navigation = () => {
    const { content } = useGlobalStore()

    return (
        <div className={styles.Navigation}>
            {content?.menu.items.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Navigation