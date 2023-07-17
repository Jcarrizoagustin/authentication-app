import Button from "./Button";
import styles from "./Register.module.css";
import Logo from "./Logo";
import Social from "./Social";
import CardInputs from "./CardInputs";
import { useState } from "react";
const initialValues = {
  email: '',
  password: ''
}

function Register() {

  const [data, setData] = useState(initialValues)

  const changeData = (key,value) => {
    setData({...data,[key]:value})
    console.log(data)
  }

  const sendData = async () => {
    const res = await fetch('http://localhost:8080/api/user/register',
    {method: 'POST',
     body: JSON.stringify(data),
     headers:{
      'Content-Type':'application/json'
     }
    })
    const json = await res.json()
    console.log(json)
  }

  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>
        Join thousands of learners from <br /> around the world{" "}
      </h2>
      <p className={styles.subtitle}>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>
      <CardInputs changeData={changeData}/>
      <Button text={"Start coding now"} handleClick={sendData}/>
      <Social path={"Register"} />
    </div>
  );
}

export default Register;
