import React, { useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, TitleContent, Content, AddNaverButton, AddNaverContainer } from '../../styles/pages/navers/create';
import api from '../../services/api';

interface Naver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

const navers = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const handleSubmit = useCallback(async (data: Naver) => {
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

      await api.post(`/navers`, formData)

      router.push('/navers');

    } catch (err) {
        // TODO modal error
        console.log(err);
    }
  }, []);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Container>
      <AddNaverContainer>
        <TitleContent>
          <button onClick={handleGoBack}>
            <img src="/images/back.svg" alt="Voltar"/>
          </button>
          <h1>Adicionar Naver</h1>
        </TitleContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Content>
              <Input label="Nome" name="name" placeholder="Nome"/>
              <Input label="Cargo" name="job_role" placeholder="Cargo"/>
              <Input label="Idade" name="birthdate" placeholder="Idade"/>
              <Input label="Tempo de empresa" name="admission_date" placeholder="Tempo de empresa"/>
              <Input label="Projetos que participou" name="project" placeholder="Projetos que participou"/>
              <Input label="URL da foto do Naver" name="url" placeholder="URL da foto do Naver"/>
            </Content>
            <AddNaverButton>
              <Button type="submit" color="black">Adicionar Naver</Button>
            </AddNaverButton>
        </Form>
      </AddNaverContainer>
    </Container>
  );
}

export default navers;
