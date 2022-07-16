import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

function Layout(props) {
    return (
        <div className={styles.layout}>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout