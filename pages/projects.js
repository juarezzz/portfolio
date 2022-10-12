import styles from '../styles/Projects.module.css';
import Project from '../components/Project';

function Projects() {
    return (
        <div>
            <h2 className={styles.title}>MEUS PROJETOS</h2>
            <div className={styles.container}>
                <Project
                    title={'Random'}
                    img={'/imgs/random-things.png'}
                    url={'https://grand-nougat-163dbd.netlify.app/random-number'}
                />
                <Project
                    title={'YelpCamp'}
                    img={'/imgs/yelp-camp.png'}
                    url={'https://radiant-shelf-20777.herokuapp.com/'}
                />
                <Project
                    title={'Chat App'}
                    img={'/imgs/chat-app.png'}
                    url={'https://superchat-1de7d.web.app/chatroom'}
                />
                <Project
                    title={'3D Dice'}
                    img={'/imgs/dice.png'}
                    url={'https://codepen.io/juarezz/full/MWrYzOq'}
                />
                <Project
                    title={'Wordle Clone'}
                    img={'/imgs/wordle-clone.png'}
                    url={'https://wonderful-khorana-8b3ddd.netlify.app/'}
                />
            </div>
        </div>
    )
}

export default Projects;