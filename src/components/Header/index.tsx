import { Container, PageInfo, Logo, SearchFeature, SearchIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <PageInfo>
        <button><Logo /></button>
        <strong>Página Inicial</strong>
      </PageInfo>

      <button id="mobile-search" type="submit"><SearchIcon /></button>

      <SearchFeature>
        <input type="text" placeholder='Buscar' />
        <button type="submit"><SearchIcon /></button>
      </SearchFeature>
    </Container>
  );
}

export default Header;