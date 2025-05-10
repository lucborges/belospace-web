

import React from 'react';
import { useForm } from 'react-hook-form';
import Input from "../../components/Input/Input";
import Button from "../../components/button/index";
import styles from './login.module.css';
import Image from 'next/image';
import api from '../../services/api';
import { useState } from 'react';
import { LoginFormData } from './interface';
import {useRouter} from 'next/router';



const UseLogin: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [click, setClick] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await api.post("http://localhost:8081/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      const result = await response.data.token;
      localStorage.setItem('token', result);

      console.log("Login realizado com sucesso", data);
      console.log("Token de login:", result);

      router.push('/dashboard')

    } catch (error: any) {
      console.error("Erro ao logar", error.response?.data || error.message);
      alert("erro ao tentar logar");
    }

  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <Image 
          src='/logo.png' alt="Belo space logo"    
          className={styles.loginLogo} />
        <div className={styles.loginHeader}>
         <span style={{color: 'rgba(24, 52, 77, 1)', fontWeight: '600'}}>Bem-vindo(a)!</span>
          <span>insira as informações nos respectivos campos para cadastrar no sistema</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Usuário"
            type="email"
            name="email"
            placeholder="exemplo@gmail.com"
            register={register}
            required
          />
          {errors.email && <span className={styles.error}>E-mail obrigatório</span>}
          <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="*******"
            register={register}
            required
          />
          {errors.password && <span className={styles.error}>E-mail obrigatório</span>}
          <div className={styles.forgotPassword}>
            <a href="#">Esqueceu sua senha?</a>
          </div>
          <Button type="submit" appearance="primary" className='loginRegisterButton'>
          Login
          </Button>
        </form>
        <div className={styles.registerLink}>
          Ainda não é cliente? <a 
          onClick= {() => {
            router.push('/register')
          }}>Cadastre-se aqui</a>
        </div>
      </div>
    </div>
  );
};

export default UseLogin;

