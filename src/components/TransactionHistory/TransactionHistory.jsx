import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';
import {
  TransactionTable,
  TableTitle,
  TableTitlesRow,
  TransactionTableSection,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTableSection>
      <TransactionTable>
        <thead>
          <TableTitlesRow>
            <TableTitle>Type</TableTitle>
            <TableTitle>Amount</TableTitle>
            <TableTitle>Currency</TableTitle>
          </TableTitlesRow>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              id={items.indexOf(item)}
            />
          ))}
        </tbody>
      </TransactionTable>
    </TransactionTableSection>
  );
};
