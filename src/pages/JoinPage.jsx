import styles from "./JoinPage.module.css";
import Register from "../componets/Register";
import Footer from "../componets/Footer";
import { Navigate } from "react-router-dom";
function JoinPage({auth,setAuth}) {

  
  return (
     auth ? <Navigate to={'/profile'}  replace={true}/> :
     <div className={styles.container}>
    <Register setAuth={setAuth}/>
    <Footer />
  </div>
  );
}

export default JoinPage;
