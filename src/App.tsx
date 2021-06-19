
import Routes from './routes/routes';

import { AuthProvider } from './hooks/useAuth';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <AuthProvider>
          <GlobalStyles />
          <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
