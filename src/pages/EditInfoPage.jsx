import EditInfoContent from "../componets/EditInfoContent";
import Header from "../componets/Header";
import styles from "./EditInfoPage.module.css";
import { Navigate } from "react-router-dom";

function EditInfoPage({auth,setAuth}) {

  return (
    auth ? <div className={styles.container}>
    <Header setAuth={setAuth}/>
    <EditInfoContent/>
  </div> : <Navigate to={'/login'}  replace={true}/>
  );
}

export default EditInfoPage;
