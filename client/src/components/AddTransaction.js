import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/StateManager';

export default function AddTransaction() {

    const { addTransaction } = useContext(GlobalContext);

    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    let acceptValues = (e) => {
        e.preventDefault();
        const newTransaction = {
            text,
            amount : +amount
        }

        addTransaction(newTransaction);

        // setText( ' ')
        // setAmount(0)

    }

    return (
        <>
            <h3 className='title is-4 has-text-centered'>Add new Transaction</h3>
              <form onSubmit={acceptValues}>
                <div className='box' id='addTransaction'>
                    <div className="field">
                        <label className="label">Text</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
                            <span className="icon is-small is-left">
                                <i className="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="amount">Amount</label>
                        <label className="label">(negative-expense, positive-income)</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                            <span className="icon is-small is-left">
                                <i className="fas fa-dollar-sign"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button className="button is-link" type='submit'>Add Transaction</button>
              </form>  
        </>
    )
}
