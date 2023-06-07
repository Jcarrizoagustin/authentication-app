import styles from "./EditInfoContent.module.css";
import { Link } from "react-router-dom";
import EditInfoForm from "./forms/EditInfoForm";
import LoginFooter from "./LoginFooter";
function EditInfoContent() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to={"/profile"}>
        <span className={`material-symbols-outlined ${styles.backIcon}`}>
          arrow_back_ios
        </span>{" "}
        Back
      </Link>
      <EditInfoForm />
      <LoginFooter />
    </div>
  );
}

export default EditInfoContent;
