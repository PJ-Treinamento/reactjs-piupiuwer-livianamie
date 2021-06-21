
import { useCallback, useRef } from 'react';
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
  const [favoriteCount, setFavoriteCount] = useState(0);
  // const [piuLikeData, setpiuLikeData] = useState<IPiuLike>({} as IPiuLike);
  
  const [isFavorited, setIsFavorited] = useState(false);

  const [likeColor, setLikeColor] = useState('black');
  const [favoriteColor, setFavoriteColor] = useState('black');
  const [deleteDisplay, setDeleteDisplay] = useState('none');
  
  const { user } = useAuth();

  const likeCountRef = useRef(likeCount);

  const id = piu.id
  
  const [isFirstRender, setisFirstRender] = useState(true);

  
  useEffect(() => {
    likeCountRef.current = likeCount 
  }, [likeCount])

  useEffect(() => {
    if (isFromUser) {
      setDeleteDisplay('initial')
    }
    else {
      setDeleteDisplay('none')
    }
  }, [])

  useEffect(() => {
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        piuApi.likes.map((like: IPiuLike) => {
          if (like.user.username === user.username) {
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

          if (operation === 'like') {
            setLikeCount(likeCount + 1);
            setLikeColor('red');
            console.log('oi')
          }
          else {
            setLikeCount(likeCount - 1);
            setLikeColor('black');
          }
        }
        addLikeToApi()
      }
    })
  }, [likeCount])


  useEffect(() => {
    if (!isFirstRender) {
      const handleFavorites = () => {
        if (isFavorited) {
          pius.map((piuApi: IPiu) => {
            if (id === piuApi.id) {
              console.log(piuApi)
              console.log(piuApi.id)
                            
              const addFavoriteToApi = async () => {
                await api.post('/pius/favorite', { piu_id: piuApi.id })
                console.log(user.favorites.length )
              }
              addFavoriteToApi()
            }
            return favoriteCount;
          })
          setFavoriteCount(likeCount + 1);
          setFavoriteColor('#FFB500');
        }
        else {
          pius.map((piuApi: IPiu) => {
            if (id === piuApi.id) {
              console.log(piuApi)
              console.log(piuApi.id)
                            
              const addFavoriteToApi = async () => {
                await api.post('/pius/unfavorite', { piu_id: piuApi.id })
                console.log(user.favorites.length)
              }
              addFavoriteToApi()
            }
            return favoriteCount;
          })
          setFavoriteCount(favoriteCount - 1);
          setFavoriteColor('black');
        }
      }
      handleFavorites();
  }
  setisFirstRender(false);
  }, [isFavorited])


  const handleDelete = useCallback( () => {    
    pius.map((piuApi: IPiu) => {
      if (id === piuApi.id) {
        const deletePiu = async () => {
          await api.delete('/pius', { data: {piu_id: piuApi.id} })
          window.location.reload();
        }
        deletePiu()
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
            { likeCountRef.current }
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