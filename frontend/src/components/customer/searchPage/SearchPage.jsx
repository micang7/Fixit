import styles from "./SearchPage.module.css";

const categories = [
  { emoji: "🧽", label: "Zwykłe" },
  { emoji: "🪚", label: "Remont" },
  { emoji: "🪟", label: "Mycie okien" },
  { emoji: "🛋️", label: "Pranie mebli" },
  { emoji: "🍳", label: "Kuchnia" },
  { emoji: "🛠️", label: "Złota rączka" },
  { emoji: "🏢", label: "Biuro" },
  { emoji: "🏠", label: "Dom prywatny" },
];

function SearchPage() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.tile}>
            <span className={styles.emoji}>{cat.emoji}</span>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
