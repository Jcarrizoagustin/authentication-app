import { useState } from "react";
import ImgProfile from "../ImgProfile";
import styles from "./EditInfoForm.module.css";

function EditInfoForm() {
  const initialData = {
    // Sera reemplazada por un fetch a los
    // datos del usuario;

    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialData);

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    console.log(e.target.id);
    setData({ ...data, [e.target.id]: e.target.value });
  };

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
          onChange={handleChange}
          id="name"
          className={styles.input}
          placeholder="Enter your name..."
          type="text"
          value={data.name}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="bio">
          Bio
        </label>
        <textarea
          onChange={handleChange}
          id="bio"
          className={styles.input}
          placeholder="Enter your bio..."
          type="text"
          value={data.bio}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="phone">
          Phone
        </label>
        <input
          onChange={handleChange}
          id="phone"
          className={styles.input}
          placeholder="Enter your phone..."
          type="text"
          value={data.phone}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          onChange={handleChange}
          id="email"
          className={styles.input}
          placeholder="Enter your email..."
          type="email"
          value={data.email}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          onChange={handleChange}
          id="password"
          className={styles.input}
          placeholder="Enter your password..."
          type="password"
          value={data.password}
        />
      </div>

      <div onClick={submit} className={styles.button}>
        <h4 className={styles.textBtn}>Save</h4>
      </div>
    </form>
  );
}

export default EditInfoForm;
