/*import styles from "./App.module.css";
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
            <Link to="/repairman-register" className={styles.link}>
              📝 Register
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;*/

import { Outlet, Link } from "react-router-dom";
import styles from "./App.module.css";
import { Phone, Mail, FileText, Wrench, UserPlus } from 'lucide-react';

function App() {
    return (
        <div className={styles.pageContainer}>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logoLink}>
                        <img src="/logo.png" alt="logo" className={styles.logo} />
                    </Link>
                </div>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Phone size={20} className={styles.contactIcon} />
                        <span>+48 111 111 111</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={20} className={styles.contactIcon} />
                        <span>fixit@gmail.com</span>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.accountLinks}>
                        <Link to="/customer-request" className={styles.navLink}>
                            <FileText size={20} className={styles.navIcon} />
                            <span>Request status</span>
                        </Link>
                        <Link to="/repairman-login" className={styles.navLink}>
                            <Wrench size={20} className={styles.navIcon} />
                            <span>Repairman zone</span>
                        </Link>
                        <Link to="/repairman-register" className={styles.registerLink}>
                            <UserPlus size={20} className={styles.navIcon} />
                            <span>Register</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className={styles.mainContent}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} FixIt. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;