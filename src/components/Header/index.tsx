import { Container, PageInfo, Logo, SearchFeature, MoreIcon, SearchIcon} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <PageInfo>
        <Logo />
        <strong>Página Inicial</strong>
      </PageInfo>

      <button id="more" type="submit"><MoreIcon /></button>

      <SearchFeature>
        <input type="text" placeholder='Buscar' />
        <button type="submit"><SearchIcon /></button>
      </SearchFeature>
    </Container>
  );
}

export default Header;