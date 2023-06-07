import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to={"/profile"} style={{ textDecoration: "none" }}>
        <div className={styles.navButton}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            account_circle
          </span>{" "}
          My Profile
        </div>
      </Link>
      <div className={styles.navButton}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          group
        </span>{" "}
        Group Chat
      </div>
      <hr
        style={{
          color: "var(--border-color)",
          opacity: ".5",
          margin: ".8rem 0",
        }}
      />
      <div className={`${styles.navButton} ${styles.logout}`}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          logout
        </span>
        Logout
      </div>
    </nav>
  );
}

export default Nav;
