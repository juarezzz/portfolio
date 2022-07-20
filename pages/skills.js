import styles from '../styles/Skills.module.css'
import Card from '../components/Card';
import { useEffect, useRef } from 'react';
import flipCards from '../utils/flipCards';

function Skills() {
    const cardGrid = useRef(null)

    useEffect(() => {
        flipCards(cardGrid.current.children)
    }, []);

    return (
        <div className={styles.container}>
            <h2>O que eu sei</h2>
            <div className={styles.grid} ref={cardGrid}>
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' label="Python" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' label="HTML" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' label="CSS" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' label="Bootstrap" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' label="JavaScript" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' label="NodeJS" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' label="ExpressJS" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' label="ReactJS" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' label="Material UI" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' label="NextJS" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' label="MongoDB" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' label="MySQL" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' label="PostgreSQL" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' label="Firebase" />
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' label="Git" />
            </div>
            {/* <h2>O que estou aprendendo / vou aprender em seguida:</h2>
            <div className={styles.grid}>
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' label="Typescript"/>
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' label="Jest"/>
                <Card src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' label="GraphQL"/>
            </div> */}
        </div>
    )
}

export default Skills;