import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateManager';

export default function IncomeExpense() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // total income
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);

    // total expense
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1).toFixed(2);

    return (
        <div className="columns">
            <div className="column">
                <div className='box'>
                    <h4 className='inc-exp has-text-centered'>Income</h4>
                    <p className="money-plus has-text-centered">+${income}</p>
                </div>
            </div>
            <div className='column'>
                <div className='box'>
                    <h4 className='inc-exp has-text-centered'>Expense</h4>
                    <p className="money-minus has-text-centered">-${expense}</p>
                </div>
            </div>
        </div>
    )
}
