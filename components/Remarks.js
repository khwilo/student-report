import Card from '../components/Card';

import styles from '../styles/Remarks.module.css';
import data from '../utils/data.json';

const Remarks = () => (
  <div className={styles.remarks}>
    <Card title="Principal's remarks" value={data.principals_remarks} />
    <Card title="Class teacher's remarks" value={data.class_teachers_remarks} />
  </div>
);

export default Remarks;
