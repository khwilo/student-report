import styles from '../styles/StudentDetails.module.css';

const StudentDetails = ({ title, info }) => (
  <div className={styles.studentDetail}>
    <p className={styles.studentDetailTitle}>{title}:</p>
    <p className={styles.studentDetailInfo}>{info}</p>
  </div>
);

export default StudentDetails;
