import { UseFormRegister } from 'react-hook-form';

export interface InputSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  register: UseFormRegister<any>;
}