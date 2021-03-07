import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import { Container, TitleContent, Content, UpdateNaverButton, UpdateNaverContainer } from '../../styles/pages/navers/update';

const navers = () => {
  return (
    <Container>
      <UpdateNaverContainer>
        <TitleContent>
          <button>
            <img src="/images/back.svg" alt="Voltar"/>
          </button>
          <h1>Editar Naver</h1>
        </TitleContent>
        <Content>
          <Input label="Nome" placeholder="Nome"/>
          <Input label="Cargo" placeholder="Cargo"/>
          <Input label="Idade" placeholder="Idade"/>
          <Input label="Tempo de espera" placeholder="Tempo de espera"/>
          <Input label="Projetos que participou" placeholder="Projetos que participou"/>
          <Input label="URL da foto do Naver" placeholder="URL da foto do Naver"/>
        </Content>
        <UpdateNaverButton>
          <Button color="black">Salvar</Button>
        </UpdateNaverButton>
      </UpdateNaverContainer>
    </Container>
  );
}

export default navers;
