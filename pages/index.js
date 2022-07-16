import styles from '../styles/Index.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Hi, my name is Juarez and I am a Full Stack Developer </h1>
      </div>
      {/* <div className={`${styles['clip-background']} ${animate ? styles['animate'] : ''}`} >
        <div className={`${styles['image-container']} ${animate ? styles['animate'] : ''}`}>
          <Image
            src='/eu.png'
            alt='Uma foto minha'
            width={1000}
            height={1000}
          />
        </div>
      </div> */}
    </div >
  )
}
