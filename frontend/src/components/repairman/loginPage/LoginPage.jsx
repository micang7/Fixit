import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function LoginPage() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const response = await axios.post("http://localhost:8080/zlota_raczka/login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/repairman-dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Wystąpił błąd podczas logowania.");
    }
  };
  return(
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>Log in</button>
      </form>
      <p className={styles.registerLink}>
        You don't have account <Link to="/repairman-register">Register here</Link>
      </p>
    </div>


  );
}

export default LoginPage;
