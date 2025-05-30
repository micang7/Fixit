/*import React from "react";
import styles from "./CategoriesPage.module.css";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Renovation", icon: "🛠️", key: "renovation" },
  { label: "Kitchen", icon: "🍽️", key: "kitchen" },
  { label: "Window Cleaning", icon: "🧼", key: "window-cleaning" },
  { label: "Furniture Cleaning", icon: "🛋️", key: "furniture-cleaning" },
  { label: "Handyman", icon: "🔧", key: "handyman" },
  { label: "Office", icon: "🏢", key: "office" },
  { label: "Private Home", icon: "🏠", key: "private-home" },
  { label: "Basic", icon: "🍪", key: "basic" },
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  const handleClick = (key) => {
    navigate(`/services/${key}`);
  };

  return (
    <div className={styles.container}>
          <h1 className={styles.title}>Choose a Service Category</h1>
      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <div key={idx} className={styles.card} onClick={() => handleClick(cat.key)}>
            <span className={styles.icon}>{cat.icon}</span>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CategoriesPage.module.css';
import {
    Wrench,
    CookingPot,
    Sparkles,
    Sofa,
    Hammer,
    Briefcase,
    Home,
    CheckCircle,
    ChevronRight
} from 'lucide-react';

const categories = [
    { label: "Renovation", Icon: Wrench, key: "renovation", themeClass: styles.themeRenovation },
    { label: "Kitchen", Icon: CookingPot, key: "kitchen", themeClass: styles.themeKitchen },
    { label: "Window-cleaning", Icon: Sparkles, key: "window-cleaning", themeClass: styles.themeWindowCleaning },
    { label: "Furniture-cleaning", Icon: Sofa, key: "furniture-cleaning", themeClass: styles.themeFurnitureCleaning },
    { label: "Handyman", Icon: Hammer, key: "handyman", themeClass: styles.themeHandyman },
    { label: "Office", Icon: Briefcase, key: "office", themeClass: styles.themeOffice },
    { label: "Private-home", Icon: Home, key: "private-home", themeClass: styles.themePrivateHome },
    { label: "Basic", Icon: CheckCircle, key: "basic", themeClass: styles.themeBasic },
];

const CategoryCard = ({ category, onClick }) => {
    const { label, Icon, key, themeClass } = category;
    return (
        <div
            onClick={() => onClick(key)}
            className={`${styles.card} ${themeClass || ''}`}
        >
            <Icon className={styles.icon} strokeWidth={1.5} />
            <span className={styles.label}>{label}</span>
            <ChevronRight className={styles.chevron} strokeWidth={1.5} />
        </div>
    );
};

const CategoriesPage = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (key) => {
        navigate(`/services/${key}`);
        console.log(`Nawigacja do /services/${key}`);
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>
                    Choose a Service Category
                </h1>
                <p className={styles.pageSubtitle}>
                    Browse our services and find the perfect solution for your needs.
                </p>
            </header>
            <main className={styles.mainContent}>
                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <CategoryCard key={cat.key} category={cat} onClick={handleCategoryClick} />
                    ))}
                </div>
            </main>
            <footer className={styles.pageFooter}>
                <p>&copy; {new Date().getFullYear()} FixIt. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CategoriesPage;

