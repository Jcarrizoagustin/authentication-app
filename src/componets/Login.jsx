import styles from "./Login.module.css";
import Logo from "./Logo";
import Social from "./Social";
import Button from "./Button";
import CardInputs from "./CardInputs";
import { useState } from "react";
const initialValues = {
  email: '',
  password: ''
}
function Login() {
  const [data, setData] = useState(initialValues)

  const changeData = (key,value) => {
    setData({...data,[key]:value})
    console.log(data)
  }

  const sendData = async () => {
    const res = await fetch('http://localhost:8080/api/login',
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
      <h2 className={styles.title}>Login</h2>
      <CardInputs changeData={changeData}/>
      <Button text={"Start coding now"} handleClick={sendData}/>
      <Social />
    </div>
  );
}

export default Login;
