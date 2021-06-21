
import { TimelineWrapper, Tab } from './styles';
import Piu from '../Piu';

import { IPiu, IPius } from '../../models';

import { useAuth } from '../../hooks/useAuth';

const Timeline: React.FC<IPius> = ({ pius }) => {
  const { user } = useAuth();

  return (
    <TimelineWrapper>
      <Tab>
        <p id="pius-section">Pius</p>
        <p>Pius e repostas</p>
      </Tab>
      {pius.map((piu: IPiu) => {
        const apiPiuUser = piu.user.username
        let isFromUser: boolean = false;
        if (apiPiuUser === user.username) {
          isFromUser = true
        }
        else {
          isFromUser = false
        }
        return <Piu key={piu.id} piu={piu} pius={pius} isFromUser={isFromUser}/>
      })}
    </TimelineWrapper>
  );
}

export default Timeline;