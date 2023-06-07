import Header from "../componets/Header";
import styles from "./PersonalInfoPage.module.css";
import PersonalInfoContent from "../componets/PersonalInfoContent";

function PersonalInfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <PersonalInfoContent />
    </div>
  );
}

export default PersonalInfoPage;
