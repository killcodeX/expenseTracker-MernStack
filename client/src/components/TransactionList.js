import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateManager';
import Transaction from './Transaction';

export default function TransactionList() {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className='title is-4 has-text-centered'>History</h3>
            <div id='transactionList'>
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={Transaction.id} transaction={transaction}/>
                    ))}
                </ul>
            </div>
        </>
    )
}
