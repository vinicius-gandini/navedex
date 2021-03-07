import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { Container, TitleContent, Content, AddNaverButton, AddNaverContainer } from '../../styles/pages/navers/create';

const navers = () => {
  return (
    <Container>
      <AddNaverContainer>
        <TitleContent>
          <button>
            <img src="/images/back.svg" alt="Voltar"/>
          </button>
          <h1>Adicionar Naver</h1>
        </TitleContent>
        <Content>
          <Input label="Nome" placeholder="Nome"/>
          <Input label="Cargo" placeholder="Cargo"/>
          <Input label="Idade" placeholder="Idade"/>
          <Input label="Tempo de espera" placeholder="Tempo de espera"/>
          <Input label="Projetos que participou" placeholder="Projetos que participou"/>
          <Input label="URL da foto do Naver" placeholder="URL da foto do Naver"/>
        </Content>
        <AddNaverButton>
          <Button>Adicionar Naver</Button>
        </AddNaverButton>
      </AddNaverContainer>
    </Container>
  );
}

export default navers;
