import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

import { Container, Login } from '../styles/pages';

const pages = () => {
  return (
    <Container>
      <Login>
        <img src="./images/logo.svg" alt="Logo"/>
        <Input label="E-mail" placeholder="E-mail"/>
        <Input label="Senha" placeholder="Senha"/>
        <Button>Entrar</Button>
      </Login>
    </Container>
  );
}

export default pages;
