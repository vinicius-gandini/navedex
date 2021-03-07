import React from 'react';
import Button from '../Button/Button';
import Link from 'next/link';

import { Overlay, Container, Title, Description, ActionButtons, CloseButton } from './styles';

interface PopUpProps {
  title: string;
  description: string;
  hasButtons: boolean;
  cancelButton?: string;
  okButton?: string;
}

const PopUp = ({
    title,
    description,
    hasButtons,
    cancelButton = 'Cancelar',
    okButton = 'Excluir'}: PopUpProps) => {
  return (
    <Overlay>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>

        {hasButtons ? (
          <ActionButtons>
            <Button >{cancelButton}</Button>
            <Button color="black">{okButton}</Button>
          </ActionButtons>
        ) : (
          <CloseButton>
            <img src="/images/close.svg" alt="Fechar"/>
          </CloseButton>
        )}
      </Container>
    </Overlay>
  );
}

export default PopUp;
