import styles from '../styles/Card.module.css';

const Card = ({ title, value }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardValue}>{`"${value}"`}</p>
  </div>
);

export default Card;
