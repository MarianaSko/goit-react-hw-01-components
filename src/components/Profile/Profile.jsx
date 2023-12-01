import {
  ProfileWrapper,
  DescriprionWrapper,
  Avatar,
  UserInfo,
  StatsList,
  StatsListItem,
  ItemSpan,
} from './Profile.styled';

export const Profile = props => {
  const {
    avatar,
    location,
    tag,
    username,
    stats: { followers, views, likes },
  } = props;

  return (
    <ProfileWrapper>
      <DescriprionWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <UserInfo $fontSize="24px" $weight="700">
          {username}
        </UserInfo>
        <UserInfo $fontSize="16px" $opacity="0.5" $weight="500">
          @{tag}
        </UserInfo>
        <UserInfo $fontSize="16px" $opacity="0.5" $weight="500">
          {location}
        </UserInfo>
      </DescriprionWrapper>

      <StatsList>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px" $weight="500">
            Followers
          </ItemSpan>
          <ItemSpan $weight="500">{followers}</ItemSpan>
        </StatsListItem>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px" $weight="500">
            Views
          </ItemSpan>
          <ItemSpan $weight="500">{views}</ItemSpan>
        </StatsListItem>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px" $weight="500">
            Likes
          </ItemSpan>
          <ItemSpan $weight="500">{likes}</ItemSpan>
        </StatsListItem>
      </StatsList>
    </ProfileWrapper>
  );
};
