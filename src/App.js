import React from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { StateManager } from './context/StateManager';


function App() {
  return (
      <StateManager>
        <Header/>
        <section className='section'>
          <div className='container'>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <AddTransaction/>
          </div>
        </section>
        <Footer/>
      </StateManager>
  );
}

export default App;
