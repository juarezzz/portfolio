import styles from '../styles/Index.module.css'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import typeText from '../utils/typeText'

export default function Home() {
  const [imageSrc, setImageSrc] = useState('/imgs/waving.png')

  const refEl = useRef([])
  const animateDiv = useRef()

  useEffect(() => {
    setTimeout(() => {
      animateDiv.current.classList.add(styles.animate)
      setImageSrc('/imgs/waving.gif')
    }, 100)
    setTimeout(() => {
      setImageSrc('/imgs/waving.png')
    }, 4200)
  }, [])

  useEffect(() => {
    const startTyping = async () => {
      try {
        await typeText(refEl.current[0], 'Olá, meu nome é Juarez e eu sou um Desenvolvedor ');
        await typeText(refEl.current[1], 'Full ');
        await typeText(refEl.current[2], 'Stack');
      } catch (error) { return; }
    }
    setTimeout(() => {
      startTyping();
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.intro}>
        <span ref={el => refEl.current[0] = el} />
        <span ref={el => refEl.current[1] = el} style={{ color: '#3B3BB0', fontWeight: 800 }} />
        <span ref={el => refEl.current[2] = el} style={{ color: '#DFDF3A', fontWeight: 800 }} />
        <span className={styles['blinking-cursor']}>|</span>
      </div>

      <div className={`${styles['clip-background']}`} ref={animateDiv}>
        <div className={`${styles['image-container']}`}>
          <Image
            priority
            src={imageSrc}
            alt=''
            width={800}
            height={800}
          />
        </div>
      </div>

    </div >
  )
}