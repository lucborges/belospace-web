import { ButtonProps } from "./interface";
import styles from "./button.module.css";

const Button = ({
  children,
  className = "",
  appearance = "primary",
  ...rest
}: ButtonProps) => {
  const appearanceClass =
    appearance === "primary" ? styles.primary : styles.secondary;
  const loginButton = 
    className === "loginRegisterButton" ? styles.buttonLoginRegister :  styles.primary;
  return (
    <button
      className={`${styles.button} ${appearanceClass} ${className} ${loginButton}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
