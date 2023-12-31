import React from 'react';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead className={css.thead}>
      <tr>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={css.td}>{type}</td>
          <td className={css.td}>{amount}</td>
          <td className={css.td}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
