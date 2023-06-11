import styles from "./CardInputs.module.css";

function CardInputs() {
  return (
    <div className={styles.inputs}>
      {/* TODO: Agregar iconos en placeholder */}
      <input className={styles.input} placeholder="Email" type="text" />
      <input className={styles.input} placeholder="Password" type="password" />
    </div>
  );
}

export default CardInputs;
