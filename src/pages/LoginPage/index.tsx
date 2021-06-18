
import { LoginPageWrapper, Logo, Inputs } from './styles';

const LoginPage: React.FC = () => {
  return (
    <LoginPageWrapper>
      <Logo />
      <strong>Bem-vinde de volta!</strong>
      <Inputs>
        <input type="text" placeholder="e-mail"/>
        <input type="text" placeholder="senha"/>
      </Inputs>
      <button type="submit">Entrar</button>
    </LoginPageWrapper>
  );
}

export default LoginPage;