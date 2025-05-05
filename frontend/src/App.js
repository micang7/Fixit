import styles from "./App.module.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className={styles.top}>
        <div className={styles.left}>
          <Link to="/" className={styles.link}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.top}>
          <p className={styles.contactItem}>📱+48 111 111 111</p>
          <p className={styles.contactItem}>📩fixit@gmail.com</p>
        </div>
        <div className={styles.right}>
          <div className={styles.accountLinks}>
            <Link to="/customer-request" className={styles.link}>
              📄 Request status
            </Link>
            <Link to="/repairman-login" className={styles.link}>
              🧰 Repairman zone
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
