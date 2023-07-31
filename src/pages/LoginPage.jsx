import styles from "./LoginPage.module.css";
import Login from "../componets/Login";
import Footer from "../componets/Footer";
import { Navigate } from "react-router-dom";
function LoginPage({auth,setAuth}) {

  return (
    auth ?<Navigate to={'/profile'}/>: <div className={styles.container}>
    <Login setAuth={setAuth}/>
    <Footer />
  </div> 
  );
}

export default LoginPage;
