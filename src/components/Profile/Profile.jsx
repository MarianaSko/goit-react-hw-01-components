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
        <UserInfo $fontSize="24px" $weight="700" $opacity="1">
          {username}
        </UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </DescriprionWrapper>

      <StatsList>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px">
            Followers
          </ItemSpan>
          <ItemSpan>{followers}</ItemSpan>
        </StatsListItem>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px">
            Views
          </ItemSpan>
          <ItemSpan>{views}</ItemSpan>
        </StatsListItem>
        <StatsListItem>
          <ItemSpan $opacity="0.5" $fontSize="14px">
            Likes
          </ItemSpan>
          <ItemSpan $weight="500">{likes}</ItemSpan>
        </StatsListItem>
      </StatsList>
    </ProfileWrapper>
  );
};
