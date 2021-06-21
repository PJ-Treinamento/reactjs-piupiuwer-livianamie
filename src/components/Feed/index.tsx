
import { Main } from './styles';
import NewPiu from '../NewPiu';
import Timeline from '../Timeline';
import { IPius } from '../../models';

const Feed: React.FC<IPius> = ({ pius }) => {
  return (
    <Main>
      <NewPiu />
      <Timeline pius={pius} />
    </Main>
  );
}

export default Feed;