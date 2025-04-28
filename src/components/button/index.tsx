import { ButtonProps } from "./interface";
import styles from './button.module.css'

const Button = ({ children, className = '', ...rest }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;