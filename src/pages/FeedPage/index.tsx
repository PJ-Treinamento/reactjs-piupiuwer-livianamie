import Header from '../../components/Header';
import Feed from '../../components/Feed';
import BottomMenu from '../../components/BottomMenu';
import SideMenu from '../../components/SideMenu';

import { Container, Wrapper, MiddleWrapper } from './styles';

import { useEffect, useState } from 'react';

import api from '../../services/api';


const FeedPage: React.FC = () => {
  const [pius, setPius] = useState([]);

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get('/pius')
      console.log(response.data)
      setPius(response.data);
    }
    loadPius()
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header />
        <MiddleWrapper>
          <Feed pius={pius}/>
          <SideMenu />
        </MiddleWrapper>
        <BottomMenu />
      </Wrapper>
    </Container>
  );
}

export default FeedPage;