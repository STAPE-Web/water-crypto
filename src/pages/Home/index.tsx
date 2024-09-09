import DailyGoal from "@/components/DailyGoal"
import Services from "@/services"
import styles from "./style.module.css"
import Records from "@/components/Records"

const Home = () => {
    return (
        <section className={styles.Page}>
            <Services.HomeContent />
            <DailyGoal />
            <Records />
        </section>
    )
}

export default Home