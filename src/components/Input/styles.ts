import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  label {
    line-height: 1rem;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #424242;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    padding: 8px;
    margin-top: 4px;

    ::placeholder {
      color: #9E9E9E;
    }
  }
`;
