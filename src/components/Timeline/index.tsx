import { TimelineWrapper, Tab, TimelineSections } from './styles';
import Piu from '../Piu';

import { IPiu, IPius } from '../../models';

import { useAuth } from '../../hooks/useAuth';
import { useMemo, useState } from 'react';

const Timeline: React.FC<IPius> = ({ pius }) => {
  const { user } = useAuth();
  const [search, setSearch] = useState('');

  const likedPiusId = useMemo(() => {
    const likedPius = pius.filter((piu) => {
      const likedPiusUsername = piu.likes.map((users) => users.user.username);
      return likedPiusUsername.includes(user.username);
    });
    return likedPius.map((piu) => piu.id);
  }, [pius, user.username]);

  // Aqui no favoritedPiusId acredito que o problema seja o fato de eu estar usando o 
  // user que vem do useAuth e este só atualiza quando eu limpo a localstorage e faço login 
  // de novo, mas não tenho certeza.
  const favoritedPiusId = useMemo(() => {
    return user.favorites.map((favoritedPiu) => favoritedPiu.id);
  }, [user.favorites]);

  return (
    <TimelineWrapper>
      <Tab>
        <TimelineSections>
          <p id="pius-section">Pius</p>
          <p>Pius e repostas</p>
        </TimelineSections>
        <input type="text" onChange={(e) => {setSearch(e.target.value)}} value={search} placeholder='Filtrar por usuário'/>
      </Tab>

      {pius.map((piu: IPiu) => {
        if(
            search === '' 
        || piu.user.username.toLowerCase().includes(search.toLowerCase()) 
        || piu.user.first_name.toLowerCase().includes(search.toLowerCase())
        || piu.user.last_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <Piu
              key={piu.id}
              piuUsername={piu.user.username}
              pius={pius}
              piu={piu}
              isLiked={likedPiusId.includes(piu.id)}
              isFavorited={favoritedPiusId.includes(piu.id)}
            />
        )}
      })}

    </TimelineWrapper>
  );
};

export default Timeline;
