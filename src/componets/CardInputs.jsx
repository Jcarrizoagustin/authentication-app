import styles from "./CardInputs.module.css";

function CardInputs() {
  return (
    <div className={styles.inputs}>
      {/* TODO: Agregar iconos en placeholder */}
      <div className={styles.iconoInput}>
          <span className={styles.icono}>&#xe158;</span>
          <input className={styles.input} placeholder="Mail" type="text" />
      </div>

      <div className={styles.iconoInput}>
          <span className={styles.icono}>&#xe897;</span>
          <input className={styles.input} placeholder="Password" type="password" />
      </div>
      
      
    </div>
  );
}

export default CardInputs;
