import PropTypes from 'prop-types';
import {
  Table,
  Tbody,
  TdBody,
  ThHead,
  Thead,
  TrBody,
  TrHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <TrHead>
          <ThHead>Type</ThHead>
          <ThHead>Amount</ThHead>
          <ThHead>Currency</ThHead>
        </TrHead>
      </Thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrBody key={id}>
              <TdBody>{type}</TdBody>
              <TdBody>{amount}</TdBody>
              <TdBody>{currency}</TdBody>
            </TrBody>
          );
        })}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
