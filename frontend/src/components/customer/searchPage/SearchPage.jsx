import { useState } from "react";
import styles from "./SearchPage.module.css";
import RequestPage from "../requestPage/RequestPage";

const mockRepairmen = [
  {
    id: 1,
    name: "Jan Kowalski",
    phone: "123 456 789",
    email: "jan@kowalski.pl",
    price: 50,
    rating: 4.5,
    city: "Rzeszów",
  },
  {
    id: 2,
    name: "Anna Nowak",
    phone: "987 654 321",
    email: "anna@nowak.pl",
    price: 40,
    rating: 4.9,
    city: "Rzeszów",
  },
];

function SearchPage() {
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("rating");
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleRequest = (repairman) => {
    setSelected(repairman);
    setShowPopup(true);
  };

  const filtered = mockRepairmen
    .filter((r) => r.city.toLowerCase().includes(city.toLowerCase()))
    .sort((a, b) => (sort === "rating" ? b.rating - a.rating : a.price - b.price));

  return (
    <div className={styles.container}>
      <h2>Search Repairmen</h2>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="rating">Sort by Rating</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className={styles.list}>
        {filtered.map((r) => (
          <div key={r.id} className={styles.card}>
            <p><strong>{r.name}</strong></p>
            <p>📞 {r.phone}</p>
            <p>📩 {r.email}</p>
            <p>💰 {r.price} zł</p>
            <p>⭐ {r.rating}</p>
            <button onClick={() => handleRequest(r)}>Request service</button>
          </div>
        ))}
      </div>

      <RequestPage
        show={showPopup}
        onClose={() => setShowPopup(false)}
        repairman={selected}
      />
    </div>
  );
}

export default SearchPage;
