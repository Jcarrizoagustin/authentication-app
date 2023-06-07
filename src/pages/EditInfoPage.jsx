import EditInfoContent from "../componets/EditInfoContent";
import Header from "../componets/Header";
import styles from "./EditInfoPage.module.css";

function EditInfoPage() {
  return (
    <div className={styles.container}>
      <Header />
      <EditInfoContent />
    </div>
  );
}

export default EditInfoPage;
