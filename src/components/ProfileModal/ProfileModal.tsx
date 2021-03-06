import React from 'react';

import { Overlay, Container, Content, Background, Name, Description, Title, Actions } from './styles';

const ProfileModal: React.FC = () => {
  return (
    <Overlay>
      <Container>
        <Background />
        <Content>
          <button>
            <img src="/images/close.svg" alt="Fechar modal"/>
          </button>

          <Name>Batman</Name>
          <Description>Desenvolvedor</Description>

          <Title>Idade</Title>
          <Description>fdsgjshg</Description>

          <Title>Tempo de empresa</Title>
          <Description>fdsgjshg</Description>

          <Title>Projetos que participou</Title>
          <Description>fdsgjshg</Description>

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
    </Overlay>
  );
}

export default ProfileModal;
