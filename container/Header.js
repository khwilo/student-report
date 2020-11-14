import Profile from '../components/Profile';
import Remarks from '../components/Remarks';

import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Profile />
    <Remarks />
  </header>
);

export default Header;
