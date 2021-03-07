import React from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import PopUp from '../components/PopUp/PopUp';
import ProfileModal from '../components/ProfileModal/ProfileModal';

import { Container, Login } from '../styles/pages';

const pages = () => {
  return (
    <Container>
      <Login>
        <img src="./images/logo.svg" alt="Logo"/>
        <Input label="E-mail" placeholder="E-mail"/>
        <Input label="Senha" placeholder="Senha"/>
        <Button color="black">Entrar</Button>
      </Login>
      <PopUp hasButtons title="Naver filhadaputado" description="filhadaputou um naver com sucesso"/>
    </Container>
  );
}

export default pages;
