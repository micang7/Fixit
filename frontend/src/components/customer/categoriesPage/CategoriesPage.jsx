import React from "react";
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
      <h2>What type of services do you need?</h2>
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

export default CategoriesPage;
