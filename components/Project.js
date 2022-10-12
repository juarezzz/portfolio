import Image from "next/image";
import styles from '../styles/Project.module.css'

function Project({ title, img, url }) {
    return (
        <div className={styles.container}>
            <a href={url} target='_blank' rel="noreferrer">
                <div className={styles.imageContainer}>
                    <Image src={img} alt={title + ' project.'} layout='fill' />
                </div>
            </a>
            <div className={styles.title}>{title}</div>
        </div>
    );
}

export default Project;
