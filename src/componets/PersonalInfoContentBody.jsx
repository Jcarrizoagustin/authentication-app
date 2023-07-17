import styles from "./PersonalInfoContentBody.module.css";
import PersonalInfoContentBodyRow from "./PersonalInfoContentBodyRow";
import ImgProfile from "./ImgProfile";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
function PersonalInfoContentBody() {
  const [personalInfo, setPersonalInfo] = useState({})

  const getInfo = async () => {
    const res = await fetch('http://localhost:8080/api/user/1')
    const json = await res.json()
    if(res.ok){
      setPersonalInfo(json)
    }else{
      console.error(json)
    }
  }


  useEffect(() => {
    getInfo()
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h2 className={styles.textTitle}>Profile</h2>
          <p className={styles.textSubtitle}>
            Some info may be visible to other people
          </p>
        </div>
        <Link to={"/edit"} style={{ textDecoration: "none" }}>
          <div className={styles.headerButton}>Edit</div>
        </Link>
      </div>
      <PersonalInfoContentBodyRow
        text={"PHOTO"}
        content={
          <ImgProfile
            src={
              //TODO this path will be replaced with userId instead of 3.
              //get userId from localStorage or jwt.
              import.meta.env.VITE_BASE_URL_GET_IMAGE+'1'
            }
            size={{ width: "4rem", height: "4rem" }}
          />
        }
      />
      <PersonalInfoContentBodyRow text={"NAME"} content={personalInfo.name} />
      <PersonalInfoContentBodyRow
        text={"BIO"}
        content={personalInfo.bio}
      />
      <PersonalInfoContentBodyRow text={"PHONE"} content={personalInfo.phone} />
      <PersonalInfoContentBodyRow
        text={"EMAIL"}
        content={personalInfo.email}
      />
      <PersonalInfoContentBodyRow text={"PASSWORD"} content={"************"} />
    </div>
  );
}

export default PersonalInfoContentBody;
