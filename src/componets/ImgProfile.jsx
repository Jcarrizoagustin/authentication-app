import styles from "./ImgProfile.module.css";

function ImgProfile({ src, size }) {
  return (
    <div className={styles.container} style={size}>
      <img src={src} alt="Profile" className={styles.menuImg} />
    </div>
  );
}

export default ImgProfile;
