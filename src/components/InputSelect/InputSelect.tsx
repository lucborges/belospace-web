import React from 'react';

import styles from './InputSelect.module.css';
import {InputSelectProps} from './interface';


const InputSelect: React.FC<InputSelectProps> = ({ label, name, options, register, required }) => {
  return (
    <div className={styles.inputSelectContainer}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} {...register(name, { required })}>
        <option value="">Selecione</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

