import { TableData, TableRow } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency, id }) => {
  return (
    <TableRow $id={id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};
