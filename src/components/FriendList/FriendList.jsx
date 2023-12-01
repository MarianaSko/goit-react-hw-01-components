import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsWrapper, FriendsList } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <FriendsList>
        {friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
      </FriendsList>
    </FriendsWrapper>
  );
};
