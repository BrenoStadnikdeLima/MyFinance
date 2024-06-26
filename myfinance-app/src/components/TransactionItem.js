import React from 'react';
import './TransactionItem.css';

const TransactionItem = ({ transaction }) => {
  return (
    <div className={`transaction-item ${transaction.total < 0 ? 'expense' : 'income'}`}>
      <span>{transaction.descricao}</span>
      <span>{transaction.entrada ? `+ R$ ${transaction.entrada.toFixed(2)}` : ''}</span>
      <span>{transaction.saida ? `- R$ ${transaction.saida.toFixed(2)}` : ''}</span>
    </div>
  );
};

export default TransactionItem;
