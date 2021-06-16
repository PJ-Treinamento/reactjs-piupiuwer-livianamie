import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';

import { Container, Wrapper } from './styles';


const FeedPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Feed />

        {/* <Sidebar /> */}
        <BottomMenu />
      </Wrapper>
    </Container>
  );
}

export default FeedPage;