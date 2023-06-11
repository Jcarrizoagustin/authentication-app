import styles from "./Social.module.css";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";

function Social({ path }) {
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
        {path === "Register" ? (
          <>
            Adready a member?{" "}
            <Link to={"/login"} className={styles.textBlue}>
              Login
            </Link>{" "}
          </>
        ) : (
          <>
            Don´t have an acount yet?{" "}
            <Link to={"/"} className={styles.textBlue}>
              Register
            </Link>{" "}
          </>
        )}
      </p>
    </div>
  );
}

export default Social;
