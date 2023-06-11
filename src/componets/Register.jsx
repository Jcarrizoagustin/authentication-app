import Button from "./Button";
import styles from "./Register.module.css";
import Logo from "./Logo";
import Social from "./Social";
import CardInputs from "./CardInputs";

function Register() {
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
      <CardInputs />
      <Button text={"Start coding now"} />
      <Social path={"Register"} />
    </div>
  );
}

export default Register;
