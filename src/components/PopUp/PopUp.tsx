import React from 'react';
import { usePopUp } from '../../context/PopUp';
import Button from '../Button/Button';

import { Overlay, Container, Title, Description, ActionButtons, CloseButton } from './styles';

interface PopUpProps {
  title: string;
  description: string;
  hasButtons?: boolean;
  handleClickPopUp?: () => Promise<void>;
  cancelButton?: string;
  okButton?: string;
}

const PopUp = ({
    title,
    description,
    hasButtons = false,
    handleClickPopUp = async () => {},
    cancelButton = 'Cancelar',
    okButton = 'Excluir'}: PopUpProps) => {

  const { closeModal } = usePopUp();

  return (
    <Overlay>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>

        {hasButtons ? (
          <ActionButtons>
            <Button onClick={closeModal}>{cancelButton}</Button>
            <Button onClick={handleClickPopUp} color="black">{okButton}</Button>
          </ActionButtons>
        ) : (
          <CloseButton onClick={closeModal}>
            <img src="/images/close.svg" alt="Fechar"/>
          </CloseButton>
        )}
      </Container>
    </Overlay>
  );
}

export default PopUp;
