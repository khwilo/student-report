import MeanMarksTable from '../components/MeanMarksTable';
import OverallPositionTable from '../components/OverallPositionTable';
import PerformanceOT from '../components/PerformanceOT';
import StreamPositionTable from '../components/StreamPositionTable';
import SubjectResults from '../components/SubjectResults';

import styles from '../styles/Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.tables}>
        <OverallPositionTable />
        <StreamPositionTable />
        <MeanMarksTable />
      </div>
      <SubjectResults />
      <PerformanceOT />
    </div>
  );
};

export default Main;
