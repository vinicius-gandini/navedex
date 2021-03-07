import styled, { css } from 'styled-components';

interface ButtonProps {
  color: string;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;

  ${props => props.color === 'black'
    ? css`
        background: #212121;
        color: #fff;`
    : css`
        background: #fff;
        color: #000;
        border: 1px solid #000;`
    }


  font-weight: 600;
`;
