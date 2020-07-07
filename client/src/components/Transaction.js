import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateManager';
import { numberWithCommas } from '../utills/format';

export default function Transaction(props) {

    const { deleteTransaction } = useContext(GlobalContext);
    const { transaction} = props;

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus box' : 'plus box'}>
            <button onClick={() => deleteTransaction(transaction._id)} className="delete">x</button><span className='money-desc title is-5'>{transaction.text}</span><span className='money-display title is-5'>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
        </li>
    )
}
