import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ImgProfile from "./ImgProfile";
import Logo from "./Logo";
import Nav from "./Nav";


function Header({setAuth}) {

  
  const initialValues = {
    "id": sessionStorage.getItem('id'),
    "name": "",
    "bio": "",
    "phone": "",
    "email": ""
  }
  const [isActive, setIsActive] = useState(false);
  const [user,setUser] = useState(initialValues)
  const [urlImg,setUrlImg] = useState('/img/defaultImg.png')


  const toggle = () => {
    setIsActive(!isActive);
  };

  const getUrlImage = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL_GET_IMAGE}`+sessionStorage.getItem('id'))
    if(res.ok){
      setUrlImg(`${import.meta.env.VITE_BASE_URL_GET_IMAGE}`+sessionStorage.getItem('id'))
    }
  }

  const getUserInfo = async () => {
    const res = await fetch(import.meta.env.VITE_BASE_URL_GET_USER + sessionStorage.getItem('id'),{
      headers:{
        Authorization:'Bearer ' +sessionStorage.getItem('token')
      }
    }
    )
    const json = await res.json()
    if(res.ok){
      setUser(json)
    }else{
      console.error('Ocurrio un error')
    }
  }

  useEffect(() => {
    getUserInfo()
    getUrlImage()
  },[])

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        <ImgProfile
          src={
            urlImg
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

      {isActive && <Nav setAuth={setAuth}/>}
    </div>
  );
}

export default Header;
