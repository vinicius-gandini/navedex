import React, { useCallback, useRef } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, LoginContent } from '../styles/pages';
import { useAuth } from '../context/Authentication';
import { usePopUp } from '../context/PopUp';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const router = useRouter();
  const { openModal, changePopUp } = usePopUp();

  const handleSubmit = useCallback(async (data: LoginForm) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await login({
        email: data.email,
        password: data.password,
      });

      router.push('/navers');

    } catch (err) {
      changePopUp({
        title: 'Oops, algo deu errado',
        description: `Cheque as credenciais`,
      });
      openModal();
    }
  }, [])

  return (
    <Container>
      <LoginContent>
        <img src="/images/logo.svg" alt="Logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input label="E-mail" name="email" placeholder="E-mail"/>
          <Input label="Senha" type="password" name="password" placeholder="Senha"/>
          <Button type="submit" color="black">Entrar</Button>
        </Form>
      </LoginContent>
    </Container>
  );
}

export default Login;
