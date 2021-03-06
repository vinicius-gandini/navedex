import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;

}

const Input = ({label, ...rest}: InputProps) => {
  return (
    <Container>
      <label>
        {label}
        <input {...rest}/>
      </label>
    </Container>
  );
}

export default Input;
