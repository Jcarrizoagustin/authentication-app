import styles from "./PersonalInfoContent.module.css";
import PersonalInfoContentBody from "./PersonalInfoContentBody";
import PersonalInfoContentHeader from "./PersonalInfoContentHeader";

import LoginFooter from "./LoginFooter";
function PersonalInfoContent() {
  return (
    <div className={styles.container}>
      <PersonalInfoContentHeader />
      <PersonalInfoContentBody />
      <LoginFooter />
    </div>
  );
}

export default PersonalInfoContent;
