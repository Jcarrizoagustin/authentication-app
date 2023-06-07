import styles from "./SocialIcon.module.css";

function SocialIcon({ imgSrc }) {
  return <img className={styles.img} src={imgSrc} />;
}

export default SocialIcon;
