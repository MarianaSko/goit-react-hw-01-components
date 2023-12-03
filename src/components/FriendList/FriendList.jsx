import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsWrapper, FriendsList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendsList>
    </FriendsWrapper>
  );
};
