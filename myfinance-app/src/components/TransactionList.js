import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map(transaction => (
        <TransactionItem key={transaction.codigo} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionList;
