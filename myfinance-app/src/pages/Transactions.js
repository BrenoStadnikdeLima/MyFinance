import React from 'react';
import TransactionList from '../components/TransactionList';
import './Transactions.css';

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions">
      <h2>Lista de Transações</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;