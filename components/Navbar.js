import styles from '../styles/Navbar.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <nav className={styles.navbar}>
            <div className={styles['link-list']}>
                <Link href='/'>
                    <button
                        className={router.pathname === '/' ? styles['active-link'] : ''}
                    >
                        HOME
                    </button>
                </Link>
                <Link href='/skills'>
                    <button
                        className={router.pathname === '/skills' ? styles['active-link'] : ''}
                    >
                        SKILLS
                    </button>
                </Link>
                <Link href='/projects'>
                    <button
                        className={router.pathname === '/projects' ? styles['active-link'] : ''}
                    >
                        PROJECTS
                    </button>
                </Link>
                <Link href='/contact'>
                    <button
                        className={router.pathname === '/contact' ? styles['active-link'] : ''}
                    >
                        CONTACT
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar