
import React from "react";
import { useForm } from 'react-hook-form';
import Input from "../Input/Input";
import Button from "../button/index";
import styles from './register.module.css'
import api from '../../services/api';
import {useRouter} from "next/navigation";
import Image from "next/image";
import {RegisterFormData} from "./interface";




const Register: React.FC = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<RegisterFormData>();
  const router = useRouter();

  const onSubmit = async(data: RegisterFormData) => {
    try{
      const response = await api.post("http://localhost:8081/api/auth/register", data);
      console.log("registro realizado com sucesso", response.data);
      alert("Usuario registrado com sucesso!");
      router.push('/login')
    }catch(error: any){
      console.error("Erro ao registrar", error.response?.data || error.message);
      alert("Erro ao registrar: " + (error.response?.data?.message || "Verifique os dados novamente"))
    }
  };
 
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <Image 
          src='/logo.png' 
          alt="Belo space logo" 
          width={180} 
          height={180}
          className={styles.registerLogo} 
        />
        <div className={styles.registerHeader}>
         <span style={{color: 'rgba(24, 52, 77, 1)', fontWeight: '600'}}>Bem-vindo(a)!</span>
          <span>insira as informações nos respectivos campos para cadastrar no sistema</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label='Nome'
            type='name'
            name='username'
            placeholder='Insira aqui o nome'
            register={register}
            required
          />
          {errors.name && <span className={styles.error}>Nome obrigatório</span>}
          <Input 
            label='Email'
            type='email'
            name='email'
            placeholder='Insira aqui seu email'
            register={register}
            required
          />
          {errors.email && <span className={styles.error}>E-mail obrigatório</span>}
          <Input 
            label='Senha'
            type='password'
            name='password'
            placeholder="********"
            register={register}
            required
          />
          {errors.password && <span className={styles.error}>Senha obrigatória</span>}
          <Button type="submit" appearance="primary" className='loginRegisterButton'>
          Registrar
          </Button>
        </form>
      </div>
    </div>
  )

}

export default Register;