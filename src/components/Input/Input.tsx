<<<<<<< HEAD
import React from "react";
import styles from "./input.module.css";
import { UseFormRegister } from "react-hook-form";
=======
import React from 'react';
import styles from './input.module.css';
import { UseFormRegister } from 'react-hook-form';
>>>>>>> cfd8317f90a6922f0ca7a50c8ce3e345b4de88aa

type InputProps = {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  register,
  required,
  placeholder,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
    </div>
  );
};

export default Input;
