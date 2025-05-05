import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <p className={styles.registerLink}>
        <Link to="/repairman-register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
