import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateManager';

export default function Balance() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);

    return (
        <>
            <h4 className='title has-text-centered'>Your Balance</h4>
            <h1 className='title is-2 has-text-centered'>${total}</h1>
        </>
    )
}
