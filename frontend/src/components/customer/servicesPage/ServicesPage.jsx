import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  const { category } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  // przykładowe usługi przypisane do kategorii
  const allServices = {
    renovation: ["Painting", "Flooring", "Plastering"],
    kitchen: ["Dishwasher install", "Cabinet repair"],
    handyman: ["Fix door", "Replace socket"],
    basic: ["General help", "Light cleaning"],
  };

  // przykładowi "złoci fachowcy"
  const repairmen = [
    {
      name: "Jakub",
      surname: "Kucharski",
      phone: "111111111",
      email: "xd@gmail.com",
      city: "Wałbrzych",
      services: ["Painting", "Fix door"],
    },
    {
      name: "Anna",
      surname: "Nowak",
      phone: "222222222",
      email: "anna@example.com",
      city: "Wrocław",
      services: ["Flooring", "Cabinet repair"],
    },
    {
      name: "Marek",
      surname: "Wiśniewski",
      phone: "333333333",
      email: "marek@help.com",
      city: "Gdańsk",
      services: ["Painting", "Plastering", "General help"],
    },
    // dodac z bazy danych zlote raczki, tylko problem jest jak nie maja jakich serwisow udzielaja
  ];

  const services = allServices[category] || [];

  const filteredRepairmen = repairmen.filter((r) =>
    r.services.includes(selectedService)
  );

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Back to categories</Link>
      <h2>Which service do you need?</h2>
      <p><strong>Category:</strong> {category}</p>

      {!selectedService && (
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </div>
          ))}
        </div>
      )}

      {selectedService && (
        <>
          <h3>Available professionals for: {selectedService}</h3>
          <button onClick={() => setSelectedService(null)} className={styles.reset}>
            ← Choose another service
          </button>
          <div className={styles.repairmen}>
            {filteredRepairmen.length === 0 && <p>No repairmen found for this service.</p>}
            {filteredRepairmen.map((r, i) => (
              <div key={i} className={styles.repairmanCard}>
                <p><strong>Name:</strong> {r.name}</p>
                <p><strong>Surname:</strong> {r.surname}</p>
                <p><strong>Phone:</strong> {r.phone}</p>
                <p><strong>Email:</strong> {r.email}</p>
                <p><strong>City:</strong> {r.city}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesPage;
