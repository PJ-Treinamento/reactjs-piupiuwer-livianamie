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

const Piu: React.FC = () => {
  return (
    <PiuWrapper>
      <img src="https://pbs.twimg.com/profile_images/1348333892105809923/elSUO1Wu_400x400.jpg" alt="Foto de perfil" />
      <PiuContent>
        <TopContent>
          <UserInfos>
            <strong>Fulano</strong>
            <span>@fulaninho</span>
          </UserInfos>
          <DotsIcon />
        </TopContent>

        <p>Hoje eu acordei feliz</p>

        <Interactions>
          <Status>
            <CommentIcon />
            3
          </Status>
          <Status>
            <RepiuIcon />
            2
          </Status>
          <Status>
            <LikeIcon />
            5
          </Status>
          <FavoriteIcon />
          <ShareIcon />
        </Interactions>
      </PiuContent>
    </PiuWrapper>
  );
}

export default Piu;