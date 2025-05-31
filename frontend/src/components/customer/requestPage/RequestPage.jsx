/*import styles from "./RequestPage.module.css";
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

export default RequestPage;*/

import React, { useState } from "react";
import {
    User,
    Phone,
    Mail,
    MapPin,
    Calendar,
    FileText,
    Send,
    X,
    AlertCircle,
    Wrench
} from 'lucide-react';
import styles from "./RequestPage.module.css";

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
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <header className={styles.pageHeader}>
                    <div className={styles.titleSection}>
                        <div className={styles.titleIcon}>
                            <Wrench className={styles.wrenchIcon} />
                        </div>
                        <h1 className={styles.pageTitle}>FixIT</h1>
                    </div>
                    <p className={styles.pageSubtitle}>
                        Request a service and we'll get back to you shortly
                    </p>
                </header>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formContent}>
                        <div className={styles.row}>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <User className={styles.labelIcon} />
                                    <span>First Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                                />
                                {errors.firstName && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.firstName}
                                    </span>
                                )}
                            </div>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <User className={styles.labelIcon} />
                                    <span>Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                                />
                                {errors.lastName && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.lastName}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <Phone className={styles.labelIcon} />
                                    <span>Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                />
                                {errors.phone && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.phone}
                                    </span>
                                )}
                            </div>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <Mail className={styles.labelIcon} />
                                    <span>Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                />
                                {errors.email && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <MapPin className={styles.labelIcon} />
                                    <span>Address</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter service address"
                                    value={form.address}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.address ? styles.inputError : ''}`}
                                />
                                {errors.address && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.address}
                                    </span>
                                )}
                            </div>
                            <div className={styles.inputWrapper}>
                                <label className={styles.label}>
                                    <Calendar className={styles.labelIcon} />
                                    <span>Preferred Date</span>
                                </label>
                                <input
                                    type="text"
                                    name="date"
                                    placeholder="dd.mm.yyyy"
                                    value={form.date}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
                                />
                                {errors.date && (
                                    <span className={styles.error}>
                                        <AlertCircle className={styles.errorIcon} />
                                        {errors.date}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={styles.textareaWrapper}>
                            <label className={styles.label}>
                                <FileText className={styles.labelIcon} />
                                <span>Additional Description</span>
                                <span className={styles.optional}>(optional)</span>
                            </label>
                            <textarea
                                name="description"
                                placeholder="Describe the issue or provide additional details..."
                                value={form.description}
                                onChange={handleChange}
                                className={styles.textarea}
                            />
                        </div>

                        <div className={styles.buttons}>
                            <button type="button" onClick={handleCancel} className={styles.cancelButton}>
                                <X className={styles.buttonIcon} />
                                Cancel
                            </button>
                            <button type="submit" className={styles.submitButton}>
                                <Send className={styles.buttonIcon} />
                                Request Service
                            </button>
                        </div>
                    </div>
                </form>

                <footer className={styles.pageFooter}>
                    <p>&copy; {new Date().getFullYear()} FixIt. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default RequestPage;
