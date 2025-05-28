import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

const mockRequests = [
  {
    id: 1,
    time: "09:00",
    service: "Shelf installation",
    address: "ul. Sikorskiego 5/36, 35-123 Rzeszów",
    client: {
      name: "John Smith",
      phone: "123 456 789",
      email: "email@gmail.com",
    },
    status: "Completed",
  },
  {
    id: 2,
    time: "11:30",
    service: "Window cleaning",
    address: "ul. Piłsudskiego 12, Rzeszów",
    client: {
      name: "John Smith",
      phone: "123 456 789",
      email: "email@gmail.com",
    },
    status: "Canceled",
  },
];

function HomePage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // backend
    // fetch("/api/requests?userId=123").then(res => res.json()).then(setRequests);
    setRequests(mockRequests);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Today repairs</h2>

      {requests.length === 0 && <p>No requests found.</p>}

      {requests.map((req) => (
        <div key={req.id} className={styles.card}>
          <p><strong>Address:</strong> {req.address}</p>
          <p><strong>Time:</strong> {req.time}</p>
          <p><strong>Service:</strong> {req.service}</p>
          <p><strong>Client:</strong> {req.client.name} | {req.client.phone} | {req.client.email}</p>
          <div className={styles.statuses}>
            <span className={`${styles.status} ${req.status === "Completed" ? styles.completed : styles.canceled}`}>
              {req.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
