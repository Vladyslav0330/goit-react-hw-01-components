import { Wrapper, Avatar, Name, Status } from './FriendCard.styled';

export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <Wrapper>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} />
      <Name> {name}</Name>
    </Wrapper>
  );
};
