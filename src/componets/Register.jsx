import Button from "./Button";
import styles from "./Register.module.css";
import Logo from "./Logo";
import Social from "./Social";
import CardInputs from "./CardInputs";
import { useState } from "react";
import { Login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: '',
  password: ''
}

function Register({setAuth}) {

  const [data, setData] = useState(initialValues)
  const navigate = useNavigate()

  const changeData = (key,value) => {
    setData({...data,[key]:value})
    console.log(data)
  }

  const sendData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_AUTH_REGISTER}`,
    {method: 'POST',
     body: JSON.stringify(data),
     headers:{
      'Content-Type':'application/json'
     }
    })
    const json = await res.json()
    if(res.ok){
      Login(json.token,json.id)
      setAuth(true)
      navigate('/profile')
    }
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
