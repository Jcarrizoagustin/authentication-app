import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navButton}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          account_circle
        </span>{" "}
        My Profile
      </div>
      <div className={styles.navButton}>
        <span className={`material-symbols-outlined ${styles.icon}`}>
          group
        </span>{" "}
        Group Chat
      </div>
      <hr style={{ color: "var(--border-color)", margin: ".8rem 0" }} />
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
