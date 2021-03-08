import React from 'react';
import { useRouter } from 'next/router';
import { Container } from './styles';

import { useAuth } from '../../context/Authentication';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <Container>
      <img onClick={() => router.push('/navers')} src="/images/logo.svg" alt="Logo"/>
      <button onClick={logout} type="button">Sair</button>
    </Container>
  );
}

export default Header;
