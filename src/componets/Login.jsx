import styles from "./Login.module.css";
import Logo from "./Logo";
import Social from "./Social";
import Button from "./Button";
import CardInputs from "./CardInputs";
function Login() {
  return (
    <div className={styles.container}>
      <Logo />
      <h2 className={styles.title}>Login</h2>
      <CardInputs />
      <Button text={"Start coding now"} />
      <Social />
    </div>
  );
}

export default Login;
