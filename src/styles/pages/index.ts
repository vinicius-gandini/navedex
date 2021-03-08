import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContent = styled.div`
  width: 28rem;
  min-height: 25.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #212121;
  padding: 40px 32px;

  img {
    height: 4rem;
    width: 15rem;
  }

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
      margin-top: 32px;
    }

    button {
      margin-top: 32px;
    }
  }
`;
