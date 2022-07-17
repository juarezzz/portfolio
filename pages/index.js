import styles from '../styles/Index.module.css'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import typeText from '../utils/typeText'

export default function Home() {
  const [animate, setAnimate] = useState(false)

  const refEl = useRef(null)

  useEffect(() => {
    setAnimate(true);
    typeText(refEl.current, 'Hi, my name is Juarez and I am a Full Stack Developer.')
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 ref={refEl}></h1>
        <span className={styles['blinking-cursor']}>|</span>
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
