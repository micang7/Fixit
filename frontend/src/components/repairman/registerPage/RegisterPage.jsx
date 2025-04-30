import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegisterPage() {
    const [formData, setFormData] = useState({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      password: "",
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

  if (formData.password !== formData.confirmPassword) {
    setError("Hasła nie są zgodne.");
    setSuccess("");
    return;
  }

  try {
    setError("");
    await axios.post("http://localhost:8080/zlota_raczka", {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      city: formData.city,
      password: formData.password,
    });

    setSuccess("Rejestracja zakończona sukcesem!");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        password: "",
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
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          Phone number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          login
          <input type="login" name="Login" value={formData.login} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
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
