import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsWrapper, FriendsList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <FriendsList>
        {friends.map(item => {
          const { id, avatar, name, isOnline } = item;
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendsList>
    </FriendsWrapper>
  );
};
