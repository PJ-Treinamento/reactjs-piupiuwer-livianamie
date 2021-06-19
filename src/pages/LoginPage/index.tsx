
import { FormEvent, useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { LoginPageWrapper, Logo, Inputs } from './styles';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {login, error} = useAuth();

  const handleLogin = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    login({email, password})

  }, [login, email, password]);

  useEffect(() => {
    error && (email === '' || password === '' 
    ? setErrorMessage('Os campos devem estar preenchidos') 
    : setErrorMessage('E-mail ou senha inválidos'));
  }, [email, error, password])
  
  return (
    <LoginPageWrapper>
      <Logo />
      <strong>Bem-vinde de volta!</strong>
      <Inputs>
        <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="text" placeholder="e-mail"/>
        <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" placeholder="senha"/>
      </Inputs>
      <span>{errorMessage}</span>
      <button onClick={handleLogin}>Entrar</button>
    </LoginPageWrapper>
  );
}

export default LoginPage;