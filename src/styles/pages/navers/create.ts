import styled from 'styled-components';


export const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const AddNaverContainer = styled.div`
  width: 592px;
  display: flex;
  flex-direction: column;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 32px;
  }
`;

export const Content = styled.div`
  margin-top: 54px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const AddNaverButton = styled.div`
  width: 176px;
  align-self: flex-end;
  margin-top: 32px;
`;
