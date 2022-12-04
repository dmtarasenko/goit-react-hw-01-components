import PropTypes from "prop-types";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableBodyCell,
} from "components/TransactionHistory/TransactionHistory.styled";

export function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableBodyCell>{type}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
