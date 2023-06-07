import styles from "./PersonalInfoContentBody.module.css";
import PersonalInfoContentBodyRow from "./PersonalInfoContentBodyRow";
import ImgProfile from "./ImgProfile";
import { Link } from "react-router-dom";
function PersonalInfoContentBody() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h2 className={styles.textTitle}>Profile</h2>
          <p className={styles.textSubtitle}>
            Some info may be visible to other people
          </p>
        </div>
        <Link to={"/edit"} style={{ textDecoration: "none" }}>
          <div className={styles.headerButton}>Edit</div>
        </Link>
      </div>
      <PersonalInfoContentBodyRow
        text={"PHOTO"}
        content={
          <ImgProfile
            src={
              "https://landing.derco.com.pe/plataforma/leads_old/assets/pages/media/pages/profile_user.jpg"
            }
            size={{ width: "4rem", height: "4rem" }}
          />
        }
      />
      <PersonalInfoContentBodyRow text={"NAME"} content={"Xhante Neal"} />
      <PersonalInfoContentBodyRow
        text={"BIO"}
        content={"I am a software developer and a big fan of devchallenges..."}
      />
      <PersonalInfoContentBodyRow text={"PHONE"} content={"908249274292"} />
      <PersonalInfoContentBodyRow
        text={"EMAIL"}
        content={"xanthe.neal@gmail.com"}
      />
      <PersonalInfoContentBodyRow text={"PASSWORD"} content={"************"} />
    </div>
  );
}

export default PersonalInfoContentBody;
