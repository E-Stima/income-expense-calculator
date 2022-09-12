import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenditure } from './components/IncomeExpenditure';
import { TransactionLists } from './components/TransactionLists';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './Context/GlobalState';




function App() {
  return (
    <GlobalProvider className='Col xs={12} md={4} lg={3}'>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenditure/>
      <TransactionLists/>
      <AddTransaction/>
      

      </div>
    
    </GlobalProvider>
  ); 
}

export default App;
