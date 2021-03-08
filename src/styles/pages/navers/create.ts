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
  justify-content: center;
  position: relative;

  h1 {
    margin-left: 32px;
  }

  button {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
  }
`;

export const Content = styled.div`
  margin-top: 54px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const AddNaverButton = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  place-content: flex-end;
  margin-top: 32px;

  button {
    width: 176px;
  }
`;
