import { useRef, useState } from "react";
import ImgProfile from "../ImgProfile";
import styles from "./EditInfoForm.module.css";

function EditInfoForm() {
  const inputRef = useRef()
  const initialData = {
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
    image:null
  };
  const [data, setData] = useState(initialData);
  // TODO: enviar imagenes
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key,value)
    });
    //TODO: the path will contain the user id instead 1
    const res = await fetch('http://localhost:8080/api/user/1',{
      method:'PUT',
      body:formData
    })
    const json = await res.json()
    console.log(json)
  };
  const handleChange = (e) => {
    
    if(e.target.type === 'file'){
      setData({ ...data, [e.target.id]: e.target.files[0] });
    }else{
      setData({ ...data, [e.target.id]: e.target.value });
    }
  };

  const handleClickFile = () => {
    inputRef.current.click()
  }

  return (
    <form className={styles.container} encType="multipart/form-data">
      <h3 className={styles.title}>Change Info</h3>
      <p className={styles.text}>Changes will be reflected to every services</p>

      <div className={styles.editImg}>
        <div className={styles.img}>
          <input ref={inputRef} className={styles.file} type="file" name="image" id="image" accept="image/png, image/jpeg"  onChange={handleChange}/>
          <span className={`material-symbols-outlined ${styles.icon}`} onClick={handleClickFile}>
            photo_camera
          </span>
          <ImgProfile
            src={
              import.meta.env.VITE_BASE_URL_GET_IMAGE+'1'
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
