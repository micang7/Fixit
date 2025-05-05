import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    telefon: "",
    email: "",
    miasto: "",
    login: "",
    haslo: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.haslo !== formData.confirmPassword) {
      setError("Hasła nie są zgodne.");
      setSuccess("");
      return;
    }

    try {
      setError("");
      await axios.post("http://localhost:8080/zlota_raczka", {
        imie: formData.imie,
        nazwisko: formData.nazwisko,
        telefon: formData.telefon,
        email: formData.email,
        miasto: formData.miasto,
        login: formData.login,
        haslo: formData.haslo,
      });

      setSuccess("Rejestracja zakończona sukcesem!");
      setFormData({
        imie: "",
        nazwisko: "",
        telefon: "",
        email: "",
        miasto: "",
        login: "",
        haslo: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error(err);
      setError("Wystąpił błąd podczas rejestracji.");
      setSuccess("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          First name:
          <input type="text" name="imie" value={formData.imie} onChange={handleChange} required />
        </label>
        <label>
          Last name:
          <input type="text" name="nazwisko" value={formData.nazwisko} onChange={handleChange} required />
        </label>
        <label>
          Phone number:
          <input type="tel" name="telefon" value={formData.telefon} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="miasto" value={formData.miasto} onChange={handleChange} required />
        </label>
        <label>
          Login:
          <input type="text" name="login" value={formData.login} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="haslo" value={formData.haslo} onChange={handleChange} required />
        </label>
        <label>
          Confirm password:
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <button type="submit">Register</button>
      </form>

      <p className={styles.loginLink}>
        <Link to="/repairman-login">Log in here</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
