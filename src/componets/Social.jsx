import styles from "./Social.module.css";
import SocialIcon from "./SocialIcon";

function Social() {
  return (
    <div className={styles.social}>
      <p className={styles.text}>or continue with these social profile</p>
      <div className={styles.icons}>
        <SocialIcon imgSrc={"/Google.svg"} />
        <SocialIcon imgSrc={"/Facebook.svg"} />
        <SocialIcon imgSrc={"/Twitter.svg"} />
        <SocialIcon imgSrc={"/Gihub.svg"} />
      </div>
      <p className={styles.text}>
        Adready a member? <span className={styles.textBlue}>Login</span>{" "}
      </p>
    </div>
  );
}

export default Social;
