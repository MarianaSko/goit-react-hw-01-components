import styled from 'styled-components';

export const StatisticsWrapper = styled.section`
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

export const StatisticsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const StatisticsListItem = styled.li`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ $bgColor }) =>
    `rgb(${$bgColor.red},${$bgColor.green},${$bgColor.blue})`};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ItemSpan = styled.span`
  font-size: ${props => props.$fontSize};
  opacity: ${props => props.$opacity};
  font-weight: ${props => props.$weight};
`;
