import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ImgProfile from "./ImgProfile";
import Logo from "./Logo";
import Nav from "./Nav";


function Header() {
  const initialValues = {
    "id": 3,
    "name": "Juan Agusti",
    "bio": "Casi Ingeniero en Informática",
    "phone": "+543834809777",
    "email": "agustin14carrizo@gmail.com"
  }
  const [isActive, setIsActive] = useState(false);
  const [user,setUser] = useState(initialValues)

  const toggle = () => {
    setIsActive(!isActive);
  };

  const getUserInfo = async () => {
    const res = await fetch(import.meta.env.VITE_BASE_URL_GET_USER + '2')
    const json = await res.json()
    if(res.ok){
      setUser(json)
    }else{
      console.error('Ocurrio un error')
    }
  }

  useEffect(() => {
    getUserInfo()
  },[])

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
        <p className={styles.name}>{user.name}</p>
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
