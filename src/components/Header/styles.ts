import styled from 'styled-components';

export const Container = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 37px;
    width: 145px;
    margin-left: 32px;
  }

  button {
    margin-right: 32px;
    width: fit-content;
    border: 0;
    padding: 0;
    background: transparent;
    font-size: 1rem;
    font-weight: 600;
  }
`;
