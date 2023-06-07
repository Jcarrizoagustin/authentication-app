import styles from "./JoinPage.module.css";
import Login from "../componets/Login";
import LoginFooter from "../componets/LoginFooter";
function JoinPage() {
  return (
    <div className={styles.container}>
      <Login />
      <LoginFooter />
    </div>
  );
}

export default JoinPage;
