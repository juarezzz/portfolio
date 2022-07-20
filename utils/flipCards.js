import styles from '../styles/Card.module.css';

const flipCards = (cards) => {
    let i = 0;
    const interval = setInterval(() => {
        cards[i].classList.add(styles['animate']);
        i++;
        if (i === cards.length) {
            clearInterval(interval);
        }
    }, 150)
}

export default flipCards;