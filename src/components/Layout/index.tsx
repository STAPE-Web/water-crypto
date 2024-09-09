import AppRouter from "../AppRouter"
import Navigation from "../Navigation"
import styles from "./style.module.css"

const Layout = () => {
    return (
        <main className={styles.Layout}>
            <AppRouter />
            <Navigation />
        </main>
    )
}

export default Layout