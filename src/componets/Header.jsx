import { useState } from "react";
import styles from "./Header.module.css";
import ImgProfile from "./ImgProfile";
import Logo from "./Logo";
import Nav from "./Nav";
import { useClickAway } from "@uidotdev/usehooks";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const ref = useClickAway(() => {
    setIsActive(false);
  });

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        <ImgProfile
          src={
            import.meta.env.VITE_BASE_URL_GET_IMAGE+'1'
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

      {isActive && <Nav ref={ref} />}
    </div>
  );
}

export default Header;
