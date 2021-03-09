import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import Login from '../pages';
import api from '../services/api';
import Cookie from 'js-cookie';
import { AuthEnum } from '../common/constants/auth';
import { useRouter } from 'next/router';

interface AuthState {
  token: string;
  id: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  id: string;
  loading: boolean;
  login(credentials: SignInCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem(AuthEnum.ID);
    const token = Cookie.get(AuthEnum.TOKEN);

    if(token && id) {
      setData({ token, id });
    }

    setLoading(false);
  }, [])

  useEffect(() => {
    if (data.token && data.id) {
      api.defaults.headers.authorization = `Bearer ${data.token}`;
    }
  }, [data])

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem(AuthEnum.ID, id);
    Cookie.set(AuthEnum.TOKEN, token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, id });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AuthEnum.ID);
    Cookie.remove(AuthEnum.TOKEN);

    delete api.defaults.headers.authorization;

    setData({} as AuthState);
    router.push('/');
  }, []);

  return (
    <AuthContext.Provider
      value={{  id: data.id, login, logout, loading }}
    >
      <ProtectRoute>
        {children}
      </ProtectRoute>
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export const ProtectRoute = ({ children }) => {
  const { id, loading } = useAuth();

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (!id){
    return <Login />;
  }
  return children;
};

export { AuthProvider, useAuth };
