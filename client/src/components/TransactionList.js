import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateManager';
import Transaction from './Transaction';

export default function TransactionList() {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    

    return (
        <>
            <h3 className='title is-4 has-text-centered'>History</h3>
            <div id='transactionList'>
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction._id} transaction={transaction} />
                    ))}
                </ul>
            </div>
        </>
    )
}
