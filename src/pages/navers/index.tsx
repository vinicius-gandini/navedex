import { GetServerSideProps } from 'next';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { AuthEnum } from '../../common/constants/auth';
import api from '../../services/api';

import { Container, TitleContent, Content, AddButton } from '../../styles/pages/navers';

interface NaversInfo {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface NaversProps {
  navers: Array<NaversInfo>
}

const navers = ({ navers }: NaversProps) => {
  const router = useRouter();

  const handleAddNaver = useCallback(() => {
    router.push('/navers/create');
  }, [router]);

  return (
    <Container>
      <TitleContent>
        <h1>Navers</h1>
        <AddButton>
          <Button onClick={handleAddNaver} color="black">Adicionar Naver</Button>
        </AddButton>
      </TitleContent>
      <Content>
        {navers.map(naver => (
          <Card key={naver.id} naver={naver}/>
        ))}
      </Content>
    </Container>
  );
}

export default navers;

export const getServerSideProps: GetServerSideProps<NaversProps> = async (ctx) => {
  const cookie = ctx.req.cookies;

  const response = await api.get<NaversInfo[]>('/navers', {
    headers: {
      'Authorization': `Bearer ${cookie[AuthEnum.TOKEN]}`
    }
  });

  return {
    props: {
      navers: response.data,
    }
  }
}
