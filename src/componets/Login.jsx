import styles from "./Login.module.css";
import Logo from "./Logo";
import Social from "./Social";
import Button from "./Button";
import CardInputs from "./CardInputs";
import { useState } from "react";
import {Login as UserLogin} from '../services/AuthService'
import toast from 'react-hot-toast';
const initialValues = {
  email: '',
  password: ''
}
function Login({setAuth}) {
  //const {setAuth} = useContext(AuthContext)

  const [data, setData] = useState(initialValues)


  const changeData = (key,value) => {
    setData({...data,[key]:value})
    //console.log(data)
  }

  const sendData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_AUTH_LOGIN}`,
        {method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type':'application/json'
          }
        })
        const json = await res.json()
        if(res.ok){
          UserLogin(json.token,json.id)
          toast.success('Welcome !',{
            duration:2000
          })
          setAuth(true)
        }else{
          toast.error('Error')
        }
    } catch (error) {
        console.error(error)
      }
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
