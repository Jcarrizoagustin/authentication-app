import styles from "./PersonalInfoContent.module.css";
import PersonalInfoContentBody from "./PersonalInfoContentBody";
import PersonalInfoContentHeader from "./PersonalInfoContentHeader";

import Footer from "./Footer";
function PersonalInfoContent() {
  return (
    <div className={styles.container}>
      <PersonalInfoContentHeader />
      <PersonalInfoContentBody />
      <Footer />
    </div>
  );
}

export default PersonalInfoContent;
