import Button from "./Button";
import styles from "./Register.module.css";
import Logo from "./Logo";
import Social from "./Social";

function Login() {
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

      <div className={styles.inputs}>
        {/* TODO: Agregar iconos en placeholder */}
        <input className={styles.input} placeholder="Email" type="text" />
        <input
          className={styles.input}
          placeholder="Password"
          type="password"
        />
      </div>
      <Button text={"Start coding now"} />
      <Social />
    </div>
  );
}

export default Login;
