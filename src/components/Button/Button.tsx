import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, color, ...rest }) => {
  return (
    <Container type="button" color={color} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
}

export default Button;
