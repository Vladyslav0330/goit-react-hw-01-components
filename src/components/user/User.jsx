import {
  Wrapper,
  UserInfo,
  Photo,
  Name,
  TagLocation,
  Stats,
  StatsList,
  ListText,
  ListNum,
} from './User.styled';

export const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <UserInfo>
        <Photo src={avatar} alt={username} />
        <Name>{username}</Name>
        <TagLocation>{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </UserInfo>
      <Stats>
        <StatsList>
          <ListText>Followers</ListText>
          <ListNum>{stats.followers}</ListNum>
        </StatsList>
        <StatsList>
          <ListText>Views</ListText>
          <ListNum>{stats.views}</ListNum>
        </StatsList>
        <StatsList>
          <ListText>Likes</ListText>
          <ListNum>{stats.likes}</ListNum>
        </StatsList>
      </Stats>
    </Wrapper>
  );
};
