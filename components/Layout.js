import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

function Layout(props) {
    return (
        <div className={styles.layout}>
            <Navbar />
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout