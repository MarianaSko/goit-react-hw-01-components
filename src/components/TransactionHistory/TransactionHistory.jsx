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
          {items.map(({ id, type, amount, currency }, index) => (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
              id={index}
            />
          ))}
        </tbody>
      </TransactionTable>
    </TransactionTableSection>
  );
};
