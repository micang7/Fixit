import React, { useState } from 'react';
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

export default OfferPage;
