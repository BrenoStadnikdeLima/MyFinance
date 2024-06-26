import React from 'react';
import './Home.css';

const Home = ({ transactions }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.total, 0);
  const income = transactions.reduce((acc, transaction) => acc + transaction.entrada, 0);
  const expense = transactions.reduce((acc, transaction) => acc + transaction.saida, 0);

  return (
    <div className="home">
      <h2>Resumo Financeiro</h2>
      <div className="summary">
        <div className="summary-item">
          <span>Saldo Atual:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Total de Receitas:</span>
          <span>R$ {income.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Total de Despesas:</span>
          <span>R$ {expense.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;