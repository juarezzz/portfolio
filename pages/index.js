import styles from '../styles/Index.module.css'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import typeText from '../utils/typeText'

export default function Home() {
  const [animate, setAnimate] = useState(false)

  const refEl = useRef([])

  useEffect(() => {
    setAnimate(true);
    const startTyping = async () => {
      try {
        await typeText(refEl.current[0], 'Olá, meu nome é Juarez e eu sou um Desenvolvedor ');
        await typeText(refEl.current[1], 'Full ');
        await typeText(refEl.current[2], 'Stack');
      } catch (error) { return; }
    }
    startTyping();
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.intro}>
        <span ref={el => refEl.current[0] = el} />
        <span ref={el => refEl.current[1] = el} style={{ color: '#3B3BB0', fontWeight: 800 }} />
        <span ref={el => refEl.current[2] = el} style={{ color: '#DFDF3A', fontWeight: 800 }} />
        <span className={styles['blinking-cursor']}>|</span>
      </div>

      <div className={`${styles['clip-background']} ${animate ? styles['animate'] : ''}`} >
        <div className={`${styles['image-container']} ${animate ? styles['animate'] : ''}`}>
          <Image
            src='/eminem.png'
            alt='Uma foto minha'
            width={1000}
            height={1000}
          />
        </div>
      </div>

    </div >
  )
}
