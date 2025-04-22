import styles from "./SearchPage.module.css";
import React, { useState } from 'react';


const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Znajdź specjalistę</h1>
      
      <form className={styles.searchForm}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Co potrzebujesz naprawić?"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Szukaj
        </button>
      </form>
    </div>
  );
}

export default SearchPage;
