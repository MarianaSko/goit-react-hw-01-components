import styled from 'styled-components';
export const FriendsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 50px auto;
  padding: 20px;
  background-color: #d4d2d2;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
