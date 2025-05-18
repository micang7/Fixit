import styles from "./RequestPage.module.css";
import { useState } from "react";

function RequestPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.date.match(/^\d{2}\.\d{2}\.\d{4}$/))
      newErrors.date = "Date must be in format dd.mm.yyyy";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    console.log("Form submitted:", form);
    setSubmitted(true);
    alert("Service request sent!");
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      description: "",
    });
  };

  const handleCancel = () => {
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>FixIT</h2>

        <div className={styles.row}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <span className={styles.error}>{errors.address}</span>}
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="date"
              placeholder="Date of repair: dd.mm.yyyy"
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>}
          </div>
        </div>

        <textarea
          name="description"
          placeholder="Additional description (optional)"
          value={form.description}
          onChange={handleChange}
        />

        <div className={styles.buttons}>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Request service</button>
        </div>

       
      </form>
    </div>
  );
}

export default RequestPage;
