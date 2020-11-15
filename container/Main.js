import PerformanceOT from '../components/PerformanceOT';
import SubjectResults from '../components/SubjectResults';

import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <SubjectResults />
      <PerformanceOT />
    </div>
  );
};

export default Main;
