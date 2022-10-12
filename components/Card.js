import Image from 'next/image'
import styles from '../styles/Card.module.css'

function Card({ src, label }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    height={50}
                    width={50}
                    alt={label + ' logo'}
                    src={src}
                />
            </div>
            <span>{label}</span>
        </div>
    )
}

export default Card;