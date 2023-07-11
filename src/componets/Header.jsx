import { useState } from "react";
import styles from "./Header.module.css";
import ImgProfile from "./ImgProfile";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    console.log('Toggle')
    setIsActive(!isActive);
  };

  const handleClickLogo = () => {
    console.log('Logo click')
    setIsActive(false);
  }

  return (
    <div className={styles.header}>
      <Logo handleClickLogo={handleClickLogo} />
      <div className={styles.menu}>
        <ImgProfile
          src={
            "https://landing.derco.com.pe/plataforma/leads_old/assets/pages/media/pages/profile_user.jpg"
          }
          size={{ width: "2rem", height: "2rem" }}
        />
        <p className={styles.name}>Xhante Neal</p>
        <span
          onClick={toggle}
          className={`material-symbols-outlined ${styles.arrow}`}
        >
          {isActive ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>

      {isActive && <Nav />}
    </div>
  );
}

export default Header;
