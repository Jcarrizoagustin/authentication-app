import styles from "./CardInputs.module.css";
import {useField} from '../hooks/useField'
import { useEffect } from "react";

function CardInputs({changeData}) {
  const email = useField({type:'email'})
  const password = useField({type:'password'})

  useEffect(() => {
    changeData(email.type,email.value)
  },[email.value])

  useEffect(() => {
    changeData(password.type,password.value)
  },[password.value])

  return (
    <div className={styles.inputs}>
      <div className={styles.iconoInput}>
          <span className={styles.icono}>&#xe158;</span>
          <input className={styles.input} placeholder="Mail" {...email} />
      </div>

      <div className={styles.iconoInput}>
          <span className={styles.icono}>&#xe897;</span>
          <input className={styles.input} placeholder="Password" type="password" {...password}/>
      </div>
    </div>
  );
}

export default CardInputs;
