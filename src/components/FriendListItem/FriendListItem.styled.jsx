import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const FriendAvatar = styled.img`
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid grey;
  width: 120px;
  height: 120px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const FriendName = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
export const FriendStatus = styled.span`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? 'green' : 'red')};
`;
