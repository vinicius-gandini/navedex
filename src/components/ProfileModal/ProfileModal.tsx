import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';
import { usePopUp } from '../../context/PopUp';
import api from '../../services/api';

import {
  Overlay,
  Container,
  Content,
  Background,
  Name,
  Description,
  Title,
  Actions
} from './styles';

interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface ProfileProps {
  naver: Naver;
  closeProfile: () => void;
}

const ProfileModal = ({naver, closeProfile}: ProfileProps) => {
  const router = useRouter();
  const { openModal, changePopUp } = usePopUp();

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
          handleClosePopUp: () => {
            closeProfile();
            router.replace('/navers');
          }
        })

      }
    })
    openModal();
  }, []);

  const handleUpdate = useCallback((id) => {
    router.push(`/navers/update/${id}`)
  }, [])

  const formattedBirthdate = useMemo(() => {
    const birth = new Date(naver.birthdate);

    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(birth);
  }, []);

  const formattedAdmissionDate = useMemo(() => {
    const admission = new Date(naver.admission_date);

    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(admission);
  }, []);

  return (
    <Overlay>
      <Container>
        <Background image={naver.url}/>
        <Content>
          <button onClick={closeProfile}>
            <img src="/images/close.svg" alt="Fechar modal"/>
          </button>

          <Name>{naver.name}</Name>
          <Description>{naver.job_role}</Description>

          <Title>Idade</Title>
          <Description>{formattedBirthdate}</Description>

          <Title>Tempo de empresa</Title>
          <Description>{formattedAdmissionDate}</Description>

          <Title>Projetos que participou</Title>
          <Description>{naver.project}</Description>

          <Actions>
          <button onClick={() => handleDelete(naver.id)}>
            <img src="/images/trash.svg" alt="Excluir naver"/>
          </button>
          <button onClick={() => handleUpdate(naver.id)}>
            <img src="/images/pen.svg" alt="Editar naver"/>
          </button>
          </Actions>
        </Content>
      </Container>
    </Overlay>
  );
}

export default ProfileModal;
