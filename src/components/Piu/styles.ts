import styled, { css } from "styled-components";
import { ThreeDots, Chat, ArrowRepeat, Heart, Star, Share } from '../../styles/Icons';

export const PiuWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background-color: white;
  border-bottom: 0.05rem solid var(--purple);

  width: 100%;

  padding: 0.8rem;

  > img {
    width: 2.4rem;

    margin-right: 0.7rem;

    border: 0.15rem solid #7C00F3;
    border-radius: 50%;
  }
`;
export const PiuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  margin-top: 0.2rem;

  > p {
    font-size: 1rem;
    margin: 0.2rem 0;
  }
`;
export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;
export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  width: 70%;

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > strong {
    font-size: 1rem;
    margin-right: 0.3rem;
  }
  > span {
    font-size: 0.8rem;
  }
`;
const iconCSS = css`
  width: 0.8rem;

  cursor: pointer;
  
  margin-right: 0.2rem;

  &:hover {
    fill: var(--darker-purple);
  }
`;
export const DotsIcon = styled(ThreeDots)`
  ${iconCSS}
`;
export const Interactions = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;

  width: 95%;

  padding: 0 0.5rem;
  margin-top: 0.7rem;
`;
export const Status = styled.div`
  display: flex;
  align-content: center;

  width: 100%;

  font-size: 0.8rem;
`;
export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;
export const RepiuIcon = styled(ArrowRepeat)`
  ${iconCSS}
`;
export const LikeIcon = styled(Heart)`
  ${iconCSS}
`;
export const FavoriteIcon = styled(Star)`
  ${iconCSS}
`;
export const ShareIcon = styled(Share)`
  ${iconCSS}
`;