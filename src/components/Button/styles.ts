import styled, { css } from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;
  font-weight: 600;
  transition: opacity 0.2s, background-color 0.2s, border-color 0.2s;

  ${props => props.color === 'black'
    ? css`
        background: #212121;
        color: #fff;`
    : css`
        background: #fff;
        color: #000;
        border: 1px solid #000;

        &:hover {
          background: #e2e2e2;
          border-color: #e2e2e2}
        }`
    }

  &:hover {
    opacity: 0.8;
  }
`;
