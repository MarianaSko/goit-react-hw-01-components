import styled from 'styled-components';

export const TableData = styled.td`
  opacity: 0.5;
  font-weight: 600;
  text-align: center;
`;

export const TableRow = styled.tr`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: ${props => (props.$id % 2 === 0 ? '#dbcece' : '#cfb8b8')};
`;
