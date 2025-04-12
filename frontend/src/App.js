import styles from "./App.module.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.h1}>Fixit</h1>
        <p1 className={styles.moj_styl}>Login</p1>
        <p1>Register</p1>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
