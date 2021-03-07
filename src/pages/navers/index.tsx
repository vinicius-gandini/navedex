import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import { Container, TitleContent, Content, AddButton } from '../../styles/pages/navers';

const navers = () => {
  return (
    <Container>
      <TitleContent>
        <h1>Navers</h1>
        <AddButton>
          <Button>Adicionar Naver</Button>
        </AddButton>
      </TitleContent>
      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}

export default navers;
