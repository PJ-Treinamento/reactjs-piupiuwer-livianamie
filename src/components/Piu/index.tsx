
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { IPiu, IPiuLike } from '../../models';

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
  piu: IPiu,
  pius: IPiu[],
  isFromUser: boolean
}
 

const Piu: React.FC<PiuProps> = ({ piu, pius, isFromUser }) => {
  const [likeCount, setLikeCount] = useState(piu.likes.length);
  
  const [isFavorited, setIsFavorited] = useState(false);

  const [likeColor, setLikeColor] = useState('black');
  const [favoriteColor, setFavoriteColor] = useState('black');
  const [deleteDisplay, setDeleteDisplay] = useState('none');

  const { user } = useAuth();

  const id = piu.id


  useEffect(() => {
    if (isFromUser) {
      setDeleteDisplay('initial')
    }
    else {
      setDeleteDisplay('none')
    }
  }, [])

  useEffect(() => {
    pius.map((piu: IPiu) => {
      const piuLikes: IPiuLike[] = piu.likes
      if (id === piu.id) {
        piuLikes.map((like: IPiuLike) => {
          if (like.user.id === user.id) {
            return setLikeColor('red');
          }
          else {
            return setLikeColor('black');
          }
        })
      }
    })
  }, [])

  const handleLike = useCallback(() => {    
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const addLikeToApi = async () => {
          const response = await api.post('/pius/like', { piu_id: piuApi.id })
          const operation: string = response.data.operation
          console.log(operation)

          if (operation === 'like') {
            console.log(piuApi.likes)
            setLikeCount(likeCount + 1);
            setLikeColor('red');
          }
          else {
            console.log(piuApi.likes)
            setLikeCount(likeCount - 1);
            setLikeColor('black');
          }
        }
        addLikeToApi()
      }
    })
  }, [likeCount])


  useEffect (() => {
    if (isFavorited) {
      setFavoriteColor('#FFB500');
    }
    else {
      setFavoriteColor('black');
    }
  }, [isFavorited])


  const handleDelete = useCallback( () => {    
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const deletePiu = async () => {
          await api.delete('/pius', { data: {piu_id: piuApi.id }})
          window.location.reload();
        }
        return deletePiu()
      }
    })
  }, [])


  return (
    <PiuWrapper>
      <img src={ piu.user.photo } alt="Foto" />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <strong>{ piu.user.first_name }</strong>
            <span>@{ piu.user.username }</span>
          </UserInfos>
          <DotsIcon />
        </TopContent>

        <p>{ piu.text }</p>

        <Interactions>
          <Status>
            <CommentIcon />
            0
          </Status>
          <Status>
            <RepiuIcon />
            12
          </Status>
          <Status>
            <LikeIcon style={{fill: `${likeColor}`}} onClick={handleLike} />
            { likeCount }
          </Status>
          <FavoriteIcon style={{fill: `${favoriteColor}`}} onClick={() => {setIsFavorited(!isFavorited)}} />
          <TrashIcon style={{display: `${deleteDisplay}`}} onClick={handleDelete} />
          <ShareIcon />
        </Interactions>
      </PiuContent>
    </PiuWrapper>
  );
}

export default Piu;