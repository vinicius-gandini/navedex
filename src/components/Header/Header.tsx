import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src="./images/logo.svg" alt="Logo"/>
      <button type="button">Sair</button>
    </Container>
  );
}

export default Header;
