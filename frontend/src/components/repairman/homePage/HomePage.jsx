/*import { useEffect, useState } from "react";
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

export default HomePage;*/

import React, { useEffect, useState } from "react";
import {
    Clock,
    MapPin,
    User,
    Phone,
    Mail,
    CheckCircle,
    XCircle,
    Calendar,
    Wrench
} from 'lucide-react';
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

const RequestCard = ({ request }) => {
    const isCompleted = request.status === "Completed";

    return (
        <div className={`${styles.card} ${isCompleted ? styles.completedCard : styles.canceledCard}`}>
            <div className={styles.cardHeader}>
                <div className={styles.serviceInfo}>
                    <div className={`${styles.serviceIcon} ${isCompleted ? styles.serviceIconCompleted : styles.serviceIconCanceled}`}>
                        <Wrench className={styles.icon} />
                    </div>
                    <div className={styles.serviceDetails}>
                        <h3 className={styles.serviceTitle}>{request.service}</h3>
                        <div className={styles.timeInfo}>
                            <Clock className={styles.smallIcon} />
                            <span className={styles.timeText}>{request.time}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.status} ${isCompleted ? styles.completed : styles.canceled}`}>
                    {isCompleted ? <CheckCircle className={styles.statusIcon} /> : <XCircle className={styles.statusIcon} />}
                    <span>{request.status}</span>
                </div>
            </div>

            <div className={styles.cardContent}>
                <div className={styles.addressSection}>
                    <MapPin className={styles.addressIcon} />
                    <span className={styles.addressText}>{request.address}</span>
                </div>

                <div className={styles.clientSection}>
                    <div className={styles.clientHeader}>
                        <User className={styles.clientIcon} />
                        <span className={styles.clientTitle}>Client Information</span>
                    </div>
                    <div className={styles.clientDetails}>
                        <div className={styles.clientInfo}>
                            <span className={styles.clientName}>{request.client.name}</span>
                        </div>
                        <div className={styles.clientInfo}>
                            <Phone className={styles.contactIcon} />
                            <span>{request.client.phone}</span>
                        </div>
                        <div className={styles.clientInfo}>
                            <Mail className={styles.contactIcon} />
                            <span>{request.client.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function HomePage() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // backend
        // fetch("/api/requests?userId=123").then(res => res.json()).then(setRequests);
        setRequests(mockRequests);
    }, []);

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className={styles.pageContainer}>
            <div className={styles.container}>
                <header className={styles.pageHeader}>
                    <div className={styles.titleSection}>
                        <div className={styles.titleIcon}>
                            <Calendar className={styles.calendarIcon} />
                        </div>
                        <h1 className={styles.pageTitle}>Today's Repairs</h1>
                    </div>
                    <p className={styles.pageSubtitle}>{today}</p>
                </header>

                <main className={styles.mainContent}>
                    {requests.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>
                                <Wrench className={styles.emptyIconSvg} />
                            </div>
                            <h3 className={styles.emptyTitle}>No repairs scheduled</h3>
                            <p className={styles.emptyText}>Enjoy your free day! New requests will appear here.</p>
                        </div>
                    ) : (
                        <div className={styles.requestsContainer}>
                            <div className={styles.summaryCard}>
                                <div className={styles.summaryContent}>
                                    <span className={styles.summaryText}>
                                        Total requests: {requests.length}
                                    </span>
                                    <div className={styles.summaryStats}>
                                        <span className={styles.statItem}>
                                            <div className={styles.statDotCompleted}></div>
                                            <span className={styles.statText}>
                                                Completed: {requests.filter(r => r.status === "Completed").length}
                                            </span>
                                        </span>
                                        <span className={styles.statItem}>
                                            <div className={styles.statDotCanceled}></div>
                                            <span className={styles.statText}>
                                                Canceled: {requests.filter(r => r.status === "Canceled").length}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {requests.map((req) => (
                                <RequestCard key={req.id} request={req} />
                            ))}
                        </div>
                    )}
                </main>

                <footer className={styles.pageFooter}>
                    <p>&copy; {new Date().getFullYear()} FixIt. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;
