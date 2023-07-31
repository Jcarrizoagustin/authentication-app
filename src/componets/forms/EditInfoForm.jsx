import { useRef, useState, useEffect } from "react";
import ImgProfile from "../ImgProfile";
import styles from "./EditInfoForm.module.css";
import { useNavigate } from "react-router-dom";
function EditInfoForm() {
  const inputRef = useRef()
  const navigate = useNavigate()
  const initialData = {
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: ""
  };
  
  const [data, setData] = useState(initialData);
  const [img,setImg] = useState(false)
  const [urlImg,setUrlImg] = useState('/img/defaultImg.png')

  
  const getUrlImage = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL_GET_IMAGE}`+sessionStorage.getItem('id'))
      if(res.ok){
        setUrlImg(`${import.meta.env.VITE_BASE_URL_GET_IMAGE}`+sessionStorage.getItem('id'))
      }else{
        throw new Error('Error al obtener la imagen')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeImg = () => {
    setImg(true)
  }


  const submitImgData = async () => {
    if(img){
      const formData = new FormData()
      formData.append('image',inputRef.current.files[0])
      const res = await fetch(`${import.meta.env.VITE_BASE_URL_GET_IMAGE}`+sessionStorage.getItem('id'),{
        method:'POST',
        headers:{
          Authorization:'Bearer ' + sessionStorage.getItem('token')
        },
        body:formData
      })
      if(!res.ok){
        console.error('Error al actualizar la imagen')
      }
    }  
  }


  const submit = async (e) => {
    e.preventDefault();
    try{  
      const res = await fetch(`${import.meta.env.VITE_BASE_URL_GET_USER}`+sessionStorage.getItem('id'),{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
          Authorization:'Bearer ' + sessionStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
      if(res.ok){
        navigate('/profile')
      }else{
        throw new Error('Error al actualizar el usuario')
      }
      
    }catch(error){
      console.error(error)
    }
  };

  const submitInfo = (e) => {
    submitImgData()
    submit(e);
  }

  const handleChange = (e) => {
    console.log(data)
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleClickFile = () => {
    inputRef.current.click()
  }

  useEffect(() => {
    getUrlImage()
  },[])
  

  return (
    <form className={styles.container} encType="multipart/form-data">
      <h3 className={styles.title}>Change Info</h3>
      <p className={styles.text}>Changes will be reflected to every services</p>

      <div className={styles.editImg}>
        <div className={styles.img}>
          <input ref={inputRef} className={styles.file} type="file" name="image" id="image" accept="image/png, image/jpeg"  onChange={handleChangeImg}/>
          <span className={`material-symbols-outlined ${styles.icon}`} onClick={handleClickFile}>
            photo_camera
          </span>
          <ImgProfile
            src={
              urlImg
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

      <div onClick={submitInfo} className={styles.button}>
        <h4 className={styles.textBtn}>Save</h4>
      </div>
    </form>
  );
}

export default EditInfoForm;
