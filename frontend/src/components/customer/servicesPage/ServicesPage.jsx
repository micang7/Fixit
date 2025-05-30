/*import React, { useState } from "react";
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

export default ServicesPage;*/

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ServicesPage.module.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
    const { category } = useParams();
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

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
    ];

    const services = allServices[category] || [];
    const filteredRepairmen = repairmen.filter((r) =>
        r.services.includes(selectedService)
    );

    const getThemeClass = () => {
        const categoryThemes = {
            renovation: styles.themeRenovation,
            kitchen: styles.themeKitchen,
            handyman: styles.themeHandyman,
            basic: styles.themeBasic,
        };
        return categoryThemes[category] || '';
    };

    const handleGoBack = () => {
        if (selectedService) {
            setSelectedService(null);
        } else {
            navigate(-1); // To cofa do poprzedniej strony w historii
        }
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={styles.navigation}>
                    <button
                        onClick={handleGoBack}
                        className={styles.backButton}
                        aria-label="Back to categories"
                    >
                        <ChevronLeft className={styles.backIcon} strokeWidth={1.5} />
                        {selectedService ? "Back to services" : "Back to categories"}
                    </button>
                    <h1 className={styles.pageTitle}>
                        {selectedService ? `Available professionals for: ${selectedService}` : `Services in: ${category}`}
                    </h1>
                </div>
                <p className={styles.pageSubtitle}>
                    {selectedService ? "Choose the best professional for your needs" : "Select the service you need"}
                </p>
            </header>

            <main className={styles.mainContent}>
                {!selectedService && (
                    <div className={styles.grid}>
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`${styles.card} ${getThemeClass()}`}
                                onClick={() => setSelectedService(service)}
                            >
                                <span className={styles.label}>{service}</span>
                                <ChevronRight className={styles.chevron} strokeWidth={1.5} />
                            </div>
                        ))}
                    </div>
                )}

                {selectedService && (
                    <div className={styles.repairmenContainer}>
                        <div className={styles.repairmenGrid}>
                            {filteredRepairmen.length === 0 ? (
                                <p className={styles.noResults}>Nie znaleziono fachowców dla tej usługi.</p>
                            ) : (
                                filteredRepairmen.map((r, i) => (
                                    <div key={i} className={styles.repairmanCard}>
                                        <div className={styles.repairmanHeader}>
                                            <h3 className={styles.repairmanName}>{r.name} {r.surname}</h3>
                                            <span className={styles.repairmanCity}>{r.city}</span>
                                        </div>
                                        <div className={styles.repairmanDetails}>
                                            <p><strong>Telefon:</strong> {r.phone}</p>
                                            <p><strong>Email:</strong> {r.email}</p>
                                        </div>
                                        <button className={styles.contactButton}>
                                            Skontaktuj się
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </main>

            <footer className={styles.pageFooter}>
                <p>&copy; {new Date().getFullYear()} FixIt. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
};

export default ServicesPage;
