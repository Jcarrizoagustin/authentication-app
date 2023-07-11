import styles from "./Logo.module.css";

function Logo({handleClickLogo}) {
  return <img onClick={handleClickLogo} className={styles.logo} src="/devchallenges.svg" />;
}

export default Logo;
