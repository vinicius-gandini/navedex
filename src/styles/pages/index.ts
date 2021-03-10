import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const LoginContent = styled.div`
  width: 28rem;
  min-height: 25.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #212121;
  padding: 2.5rem 2rem;

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
      margin-top: 2rem;
    }

    button {
      margin-top: 2rem;
    }
  }
`;
