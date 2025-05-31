/*import React, { useState } from 'react';
import styles from './OfferPage.module.css';

const repairmen = [
  { imie: 'Jakub', nazwisko: 'Kucharski', telefon: '111111111', email: 'xd@gmail.com', miasto: 'Wałbrzych' },
  // wczytac czy dodac dane z backendu lub cos albo jakos inaczej to skminic
];

const OfferPage = () => {
  const [searchCity, setSearchCity] = useState('');

  const filtered = repairmen.filter(r => 
    r.miasto.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        placeholder="Enter city..." 
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className={styles.input}
      />
      <div className={styles.list}>
        {filtered.map((r, idx) => (
          <div key={idx} className={styles.card}>
            <p><strong>First name:</strong> {r.imie}</p>
            <p><strong>Second name:</strong> {r.nazwisko}</p>
            <p><strong>Phone number:</strong> {r.telefon}</p>
            <p><strong>Email:</strong> {r.email}</p>
            <p><strong>City:</strong> {r.miasto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './OfferPage.module.css';
import { ChevronLeft, Search } from 'lucide-react';

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

const OfferPage = () => {
    const [searchCity, setSearchCity] = useState('');
    const navigate = useNavigate();

    const filtered = repairmen.filter(r =>
        r.city.toLowerCase().includes(searchCity.toLowerCase())
    );

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <button
                    onClick={() => navigate(-1)}
                    className={styles.backButton}
                    aria-label="Back"
                >
                    <ChevronLeft className={styles.backIcon} strokeWidth={1.5} />
                    Back
                </button>
                <h1 className={styles.pageTitle}>
                    Find a specialist in your area
                </h1>
                <p className={styles.pageSubtitle}>
                    Search for a handyman in the selected city
                </p>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchInputWrapper}>
                        <Search className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder="Enter the city..."
                            value={searchCity}
                            onChange={(e) => setSearchCity(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    {filtered.length === 0 ? (
                        <p className={styles.noResults}>
                            {searchCity ?
                                `No professionals were found in the city ${searchCity}` :
                                'Enter the city to search for available professionals'}
                        </p>
                    ) : (
                        filtered.map((r, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.repairmanName}>{r.name} {r.surname}</h3>
                                    <span className={styles.repairmanCity}>{r.city}</span>
                                </div>
                                <div className={styles.cardDetails}>
                                    <p><strong>Phone number:</strong> {r.phone}</p>
                                    <p><strong>Email:</strong> {r.email}</p>
                                    <div className={styles.services}>
                                        <strong>Services:</strong>
                                        <div className={styles.servicesList}>
                                            {r.services.map((service, i) => (
                                                <span key={i} className={styles.serviceTag}>{service}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className={styles.contactButton}>
                                    Contact with specialist
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </main>

            <footer className={styles.pageFooter}>
                <p>&copy; {new Date().getFullYear()} FixIt. All right reserved.</p>
            </footer>
        </div>
    );
};

export default OfferPage;