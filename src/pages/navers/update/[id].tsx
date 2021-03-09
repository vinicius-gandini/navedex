import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';


import {
  Container,
  TitleContent,
  Content,
  UpdateNaverButton,
  UpdateNaverContainer
} from '../../../styles/pages/navers/update';
import api from '../../../services/api';
import { GetServerSideProps } from 'next';
import { AuthEnum } from '../../../common/constants/auth';
import { usePopUp } from '../../../context/PopUp';

interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface UpdateProps {
  naver: Naver
}

const navers = ({naver}: UpdateProps) => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();
  const { openModal, changePopUp } = usePopUp();

  useEffect(() => {
    router.prefetch('/navers');
  }, [])

  const handleSubmit = useCallback( async (data: Naver) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        job_role: Yup.string().required('Cargo é obrigatório'),
        birthdate: Yup.string().required('Data de nascimento obrigatória'),
        admission_date: Yup.string().required('Data de admissão obrigatório'),
        project: Yup.string().required('Nome do projeto é obrigatório'),
        url: Yup.string().required('URL é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, job_role, birthdate, admission_date, project, url } = data;

      const formData = {
        name,
        job_role,
        birthdate,
        admission_date,
        project,
        url
      }

      await api.put(`/navers/${naver.id}`, formData)

      router.push('/navers');

    } catch (err) {
      changePopUp({
        title: 'Oops, algo deu errado',
        description: `Cheque os campos e tente novamente`,
      });
      openModal();
    }
  }, [])

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  const formattedBirthdate = useMemo(() => {
    const birth = new Date(naver.birthdate);

    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(birth);
  }, []);

  const formattedAdmissionDate = useMemo(() => {
    const admission = new Date(naver.admission_date);

    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(admission);
  }, []);

  return (
    <Container>
      <UpdateNaverContainer>
        <TitleContent>
          <button onClick={handleGoBack}>
            <img src="/images/back.svg" alt="Voltar"/>
          </button>
          <h1>Editar Naver</h1>
        </TitleContent>
        <Form ref={formRef} initialData={{
          name: naver.name,
          job_role: naver.job_role,
          birthdate: formattedBirthdate,
          admission_date: formattedAdmissionDate,
          project: naver.project,
          url: naver.url,
        }} onSubmit={handleSubmit}>
          <Content>
            <Input label="Nome" name="name" placeholder="Nome"/>
            <Input label="Cargo" name="job_role" placeholder="Cargo"/>
            <Input label="Idade" name="birthdate" placeholder="Idade"/>
            <Input label="Tempo de empresa" name="admission_date" placeholder="Tempo de empresa"/>
            <Input label="Projetos que participou" name="project" placeholder="Projetos que participou"/>
            <Input label="URL da foto do Naver" name="url" placeholder="URL da foto do Naver"/>
          </Content>
          <UpdateNaverButton>
            <Button type="submit" color="black">Salvar</Button>
          </UpdateNaverButton>
        </Form>
      </UpdateNaverContainer>
    </Container>
  );
}

export default navers;

export const getServerSideProps: GetServerSideProps<UpdateProps> = async (ctx) => {
  const { id } = ctx.params;

  const cookie = ctx.req.cookies;

  const response = await api.get<Naver>(`/navers/${id}`, {
    headers: {
      'Authorization': `Bearer ${cookie[AuthEnum.TOKEN]}`
    }
  });

  return {
    props: {
      naver: response.data,
    }
  }
}
