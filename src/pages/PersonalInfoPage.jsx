import Header from "../componets/Header";
import styles from "./PersonalInfoPage.module.css";
import PersonalInfoContent from "../componets/PersonalInfoContent";
import { Navigate } from "react-router-dom";

function PersonalInfoPage({auth,setAuth}) {
  
  return (
    auth ? <div className={styles.container}>
    <div className={styles.header}>
      <Header setAuth={setAuth}/>
    </div>
    <PersonalInfoContent/>
  </div> : <Navigate to={'/login'} replace={true}/>
  );
}

export default PersonalInfoPage;
