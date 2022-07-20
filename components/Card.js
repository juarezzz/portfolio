import Image from 'next/image'
import styles from '../styles/Card.module.css'

function Card({ src, label }) {
    return (
        <div className={styles.card}>
            <Image
                height={60}
                width={60}
                alt=''
                src={src}
            />
            <span>{label}</span>
        </div>
    )
}

export default Card;