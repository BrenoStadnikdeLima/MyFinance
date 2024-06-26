import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import './App.css';

const App = () => {
  const [transactions] = useState([
    { codigo: 1, descricao: 'Salário', entrada: 5000.00, saida: 0.00, total: 5000.00 },
    { codigo: 2, descricao: 'Aluguel', entrada: 0.00, saida: 1500.00, total: -1500.00 },
    // ... restante das transações
  ]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home transactions={transactions} />} />
            <Route path="/transactions" element={<Transactions transactions={transactions} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
