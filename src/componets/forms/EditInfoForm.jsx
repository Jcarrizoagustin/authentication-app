import ImgProfile from "../ImgProfile";
import styles from "./EditInfoForm.module.css";

function EditInfoForm() {
  return (
    <form className={styles.container}>
      <h3 className={styles.title}>Change Info</h3>
      <p className={styles.text}>Changes will be reflected to every services</p>

      <div className={styles.editImg}>
        <div className={styles.img}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            photo_camera
          </span>
          <ImgProfile
            src={
              "https://landing.derco.com.pe/plataforma/leads_old/assets/pages/media/pages/profile_user.jpg"
            }
            size={{
              width: "4rem",
              height: "4rem",
              filter: "contrast(60%)",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-5",
            }}
          />
        </div>
        <p className={styles.editImgText}>CHANGE PHOTO</p>
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={styles.input}
          placeholder="Enter your name..."
          type="text"
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="bio">
          Bio
        </label>
        <textarea
          id="bio"
          className={styles.input}
          placeholder="Enter your bio..."
          type="text"
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          className={styles.input}
          placeholder="Enter your phone..."
          type="text"
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          placeholder="Enter your email..."
          type="email"
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={styles.input}
          placeholder="Enter your password..."
          type="password"
        />
      </div>

      <div className={styles.button}>
        <h4 className={styles.textBtn}>Save</h4>
      </div>
    </form>
  );
}

export default EditInfoForm;
