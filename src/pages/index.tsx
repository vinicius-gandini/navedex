import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import ProfileModal from '../components/ProfileModal/ProfileModal';

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
      <ProfileModal />
    </Container>
  );
}

export default pages;
