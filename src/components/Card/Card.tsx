import React, { useCallback } from 'react';
import api from '../../services/api';
import { useRouter } from 'next/router';

import { Container, Content, Title, Description, Actions } from './styles';
import { usePopUp } from '../../context/PopUp';
import ProfileModal from '../ProfileModal/ProfileModal';

interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface CardProps {
  naver: Naver;
  openProfile: () => void;
}

const Card = ({ naver, openProfile }: CardProps) => {
  const router = useRouter();
  const { openModal, closeModal, changePopUp } = usePopUp();

  const handleDelete = useCallback(async (id) => {
    changePopUp({
      title: 'Excluir naver',
      description: 'Tem certeza que deseja excluir este Naver',
      hasButtons: true,
      handleClickPopUp: async () => {
        await api.delete(`/navers/${id}`);
        changePopUp({
          title: 'Naver excluído',
          description: 'Naver excluído com sucesso!',
          handleClosePopUp: () => router.replace('/navers')
        })
      }
    })
    openModal();
  }, []);

  const handleUpdate = useCallback((id) => {
    router.push(`/navers/update/${id}`)
  }, [])

  return (
      <Container>
        <img onClick={openProfile} src={naver.url} alt={naver.name}/>
        <Content>
          <Title>{naver.name}</Title>
          <Description>{naver.job_role}</Description>
          <Actions>
            <button onClick={() => handleDelete(naver.id)}>
              <img src="/images/trash.svg" alt="Excluir Naver"/>
            </button>
            <button onClick={() => handleUpdate(naver.id)}>
              <img src="/images/pen.svg" alt="Editar Naver"/>
            </button>
          </Actions>
        </Content>
      </Container>
  );
}

export default Card;
