import styled from 'styled-components';

export const ProfileWrapper = styled.section`
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

export const DescriprionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 1px solid grey;
  width: 175px;
  height: 175px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const UserInfo = styled.p`
  font-size: ${props => props.$fontSize || '16px'};
  opacity: ${props => props.$opacity || '0.5'};
  font-weight: ${props => props.$weight || '500'};
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ItemSpan = styled.span`
  font-size: ${props => props.$fontSize};
  opacity: ${props => props.$opacity};
  font-weight: 500;
`;
