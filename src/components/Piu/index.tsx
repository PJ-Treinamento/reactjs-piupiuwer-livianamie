import { useRef } from 'react';
import { useEffect, useState } from 'react';
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
  ShareIcon
 } from './styles';


 interface PiuProps {
  piu: IPiu,
}
 

const Piu: React.FC<PiuProps> = ({ piu }) => {
  const [likeCount, setLikeCount] = useState(piu.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isFirstRender, setisFirstRender] = useState(true);
  
  
  useEffect(()=> {
    if (!isFirstRender) {
      const handleLike = () => {
      isLiked
      ? setLikeCount(likeCount + 1) 
      : setLikeCount(likeCount - 1)
    }
  handleLike();
  }
  setisFirstRender(false)
}, [isLiked])

  return (
    <PiuWrapper>
      <img src={ piu.user.photo } alt="Foto de perfil" />
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
            <LikeIcon onClick={() => {setIsLiked(!isLiked)}}/>
            { likeCount }
          </Status>
          <FavoriteIcon />
          <ShareIcon />
        </Interactions>
      </PiuContent>
    </PiuWrapper>
  );
}

export default Piu;