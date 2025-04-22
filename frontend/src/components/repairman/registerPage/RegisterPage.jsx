import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form}>
        <label>
          Email:
          <input type="email" />
        </label>

        <label>
          Password:
          <input type="password" />
        </label>

        <label>
          Confirm password:
          <input type="password" />
        </label>

        <button type="submit">Register</button>
      </form>

      <p className={styles.loginLink}>
        <Link to="/repairman-login">Log in here</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
