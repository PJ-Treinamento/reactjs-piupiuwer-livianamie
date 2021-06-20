
import { TimelineWrapper, Tab } from './styles';
import Piu from '../Piu';
import { IPiu } from '../../models';
import { useEffect, useState } from 'react';
import api from '../../services/api';

const Timeline: React.FC = () => {
  const [pius, setPius] = useState([]);
  

  useEffect(() => {
    const loadPius = async () => {
      const response = await api.get('/pius').then()
      console.log(response.data)
      setPius(response.data);
    }
    loadPius()
  }, []);

  return (
    <TimelineWrapper>
      <Tab>
        <p id="pius-section">Pius</p>
        <p>Pius e repostas</p>
      </Tab>
      {pius.map((piu: IPiu) => {
          return <Piu key={piu.id} piu = {piu}/>
      })}
    </TimelineWrapper>
  );
}

export default Timeline;