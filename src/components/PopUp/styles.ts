import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 592px;
  max-height: 233px;
  background: #fff;
  padding: 32px;
  position: relative;
`;

export const Title = styled.p`
  line-height: 36px;
  font-size: 24px;
  font-weight: 600;
`;

export const Description = styled.p`
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  place-content: flex-end;
  margin-top: 32px;

  button {
    width: 176px;

    & + button {
      margin-left: 24px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 29px;
  right: 29px;
`;
