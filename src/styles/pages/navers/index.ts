import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.5rem 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width: 600px) {
    padding-bottom: 2rem;
  }
`;

export const TitleContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    margin-bottom: 1rem;
  }
`;

export const AddButton = styled.div`
  width: 176px;
`;
