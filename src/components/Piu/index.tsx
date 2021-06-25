import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { IPiu } from '../../models';

import api from '../../services/api';

import { 
  PiuWrapper,
  PiuContent,
  TopContent,
  UserInfos,
  DotsIcon,
  Interactions,
  Status,
  CommentIcon,
  RepiuIcon,
  LikeIcon,
  FavoriteIcon,
  ShareIcon,
  TrashIcon
} from './styles';

interface PiuProps {
  piu: IPiu;
  pius: IPiu[];
  isLiked: boolean;
  isFavorited: boolean;
  piuUsername: string
}

const Piu: React.FC<PiuProps> = ({ piu, pius, piuUsername, isLiked, isFavorited}) => {
  const [likeCount, setLikeCount] = useState(piu.likes.length);

  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorited);

  const [fromUser, setFromUser] = useState(false);
  
  const { user } = useAuth();
  const id = piu.id;

  const { token } = useAuth()

  useEffect(() => {
    if (piuUsername === user.username) {
      setFromUser(true);
    } else {
      setFromUser(false);
    }
  }, []);

  const handleLike = () => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const addLikeToApi = async () => {
          const response = await api.post('/pius/like', { piu_id: piuApi.id });
          const operation: string = response.data.operation;

          if (operation === 'like') {
            setLikeCount(likeCount + 1);
            setLikeStatus(true);
          } else {
            setLikeCount(likeCount - 1);
            setLikeStatus(false);
          }
        };
        addLikeToApi();
      }
    });
  };

  useEffect(() => {
    if (isFavorited) {
      setFavoriteStatus(true);
    } else {
      setFavoriteStatus(false);
    }
  }, []);

  // Os favoritos estão sendo registrados/tirados da API mas só são atualizados
  // na página do feed quando eu limpo a localstorage e faço login de novo
  // O problema provavelmente é no componente Timeline que é onde eu faço essa
  // função de deixar amarela as estrelas dos pius que já estão favoritados.
  const handleFavorite = useCallback(() => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
          if (favoriteStatus === true) {
            const unfavorite = async () => {
              setFavoriteStatus(false)
              await api.post('/pius/unfavorite', {piu_id: piuApi.id},
              {headers: {'Authorization': `Bearer ${token}`}})
            }
            unfavorite()
          }
          else {
            const favorite = async () => {
              await api.post('/pius/favorite', {piu_id: piuApi.id},
              {headers: {'Authorization': `Bearer ${token}`}})
              setFavoriteStatus(true)
            }
            favorite()
          }
        };
    });
    return favoriteStatus
  }, [favoriteStatus, id, pius, token])

  const handleDelete = useCallback(() => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const deletePiu = async () => {
          await api.delete('/pius', { data: { piu_id: piuApi.id } });
          window.location.reload();
        };
        return deletePiu();
      }
    });
  }, [id, pius]);

  return (
    <PiuWrapper>
      <img src={piu.user.photo} alt="Foto" />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <strong>
              {piu.user.first_name} {piu.user.last_name}
            </strong>
            <span>@{piu.user.username}</span>
          </UserInfos>
          <DotsIcon />
        </TopContent>

        <p>{piu.text}</p>

        <Interactions>
          <Status>
            <CommentIcon />0
          </Status>
          <Status>
            <RepiuIcon />
            12
          </Status>
          <Status>
            <LikeIcon isLiked={likeStatus} onClick={handleLike} />
            {likeCount}
          </Status>
          <FavoriteIcon
            isFavorited={favoriteStatus}
            onClick={handleFavorite}
          />
          <TrashIcon isFromUser={fromUser} onClick={handleDelete} />
          <ShareIcon />
        </Interactions>
      </PiuContent>
    </PiuWrapper>
  );
};

export default Piu;
