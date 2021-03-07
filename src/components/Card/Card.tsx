import React from 'react';

import { Container, Content, Title, Description, Actions } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <img src="https://s2.glbimg.com/GoIfp7hJ3_7aFEqg_TVfoRRpAig=/e.glbimg.com/og/ed/f/original/2020/08/22/batman.png" alt=""/>
      <Content>
        <Title>Batman</Title>
        <Description>Desenvolvedor</Description>
        <Actions>
          <button>
            <img src="/images/trash.svg" alt="Fechar modal"/>
          </button>
          <button>
            <img src="/images/pen.svg" alt="Fechar modal"/>
          </button>
        </Actions>
      </Content>
    </Container>
  );
}

export default Card;
