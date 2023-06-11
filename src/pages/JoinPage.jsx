import styles from "./JoinPage.module.css";
import Register from "../componets/Register";
import Footer from "../componets/Footer";
function JoinPage() {
  return (
    <div className={styles.container}>
      <Register />
      <Footer />
    </div>
  );
}

export default JoinPage;
