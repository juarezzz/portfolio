import Image from "next/image";
import { useRef, useState } from "react";
import styles from '../styles/Contact.module.css'

function Contact() {
    const [emailText, setEmailText] = useState('')
    const sendEmailMessage = useRef(null)

    const handleSendEmail = (evt) => {
        evt.preventDefault();
        fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ body: emailText }) })
            .then((response) => {
                if (response.status === 200) {
                    sendEmailMessage.current.classList.remove(styles.error)
                    sendEmailMessage.current.textContent = 'Mensagem enviada com sucesso!'
                } else {
                    sendEmailMessage.current.textContent = 'Houve um problema ao enviar a mensagem!'
                    sendEmailMessage.current.classList.add(styles.error)
                }
                sendEmailMessage.current.style.opacity = 1
                setTimeout(() => {
                    sendEmailMessage.current.style.opacity = 0
                }, 2500)
            })
        setEmailText('');
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSendEmail} className={styles.emailForm}>
                <label htmlFor='email'>Me envie um email:</label>
                <textarea
                    placeholder="Insira sua informação de contato no email e eu responderei o mais breve possível."
                    id="email"
                    className={styles.emailInput}
                    value={emailText}
                    onChange={(evt) => setEmailText(evt.target.value)}
                />
                <button type="submit" className={styles.sendButton}>
                    Enviar Email
                </button>
            </form>
            <div className={styles.seeMore}>
                <div className={styles.linksContainer}>
                    <div className={styles.linksTitle}>Ver também</div>
                    <a className={styles.link} target='_blank' href={'https://www.linkedin.com/in/juarez-junior-814295221/'} rel="noreferrer">
                        <span>LinkedIn</span>
                        <Image
                            width={50}
                            height={50}
                            alt={'Linkedin logo'}
                            src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'} />
                    </a>
                    <a className={styles.link} target='_blank' href={'https://github.com/juarezzz'} rel="noreferrer">
                        <span>Github</span>
                        <Image
                            width={50}
                            height={50}
                            alt={'Github logo'}
                            src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} />
                    </a>
                </div>
                <a
                    className={styles.resume}
                    target='_blank'
                    href={'/documents/juarez-de-oliveira-junior-curriculo.pdf'}
                    rel="noreferrer"
                >
                    Ver meu currículo
                </a>
            </div>
            <div ref={sendEmailMessage} className={styles.sendEmailMessage} />
        </div>
    )
}

export default Contact;