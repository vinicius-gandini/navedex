import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 40px 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const AddButton = styled.div`
  width: 176px;
`;
