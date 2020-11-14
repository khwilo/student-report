import StudentDetails from '../components/StudentDetails';

import styles from '../styles/Profile.module.css';
import data from '../utils/data.json';

const Profile = () => (
  <div className={styles.profile}>
    <img
      className={styles.profileImage}
      src={data.student_photo}
      alt='person image'
    />

    <div>
      <h1 className={styles.profileName}>{data.student_name}</h1>
      <div>
        <StudentDetails
          title='Admission number'
          info={data.student_admission_number}
        />
        <StudentDetails title='Class name' info={data.class_name} />
        <StudentDetails title='Exam name' info={data.exam_name} />
        <StudentDetails title='Mean Grade' info={data.mean_grade} />
      </div>
    </div>
  </div>
);

export default Profile;
