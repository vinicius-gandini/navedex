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

  @media(max-width: 600px) {
    padding: 2rem;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 2rem;
  }
`;

export const Content = styled.div`
  margin-top: 3.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AddNaverButton = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  place-content: flex-end;
  margin-top: 2rem;

  button {
    width: 176px;
  }

  @media(max-width: 600px) {
    display: flex;
    place-content: center;
    margin-bottom: 2rem;
  }
`;
