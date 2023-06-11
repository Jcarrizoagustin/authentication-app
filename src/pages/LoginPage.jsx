import styles from "./LoginPage.module.css";
import Login from "../componets/Login";
import Footer from "../componets/Footer";
function LoginPage() {
  return (
    <div className={styles.container}>
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
