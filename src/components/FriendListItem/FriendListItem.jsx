import {
  FriendsListItem,
  FriendAvatar,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem>
      <FriendStatus $status={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
};
