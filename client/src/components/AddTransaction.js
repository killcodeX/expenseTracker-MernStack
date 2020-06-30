import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/StateManager';

export default function AddTransaction() {

    const { addTransaction } = useContext(GlobalContext);

    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);

    let acceptValues = (e) => {
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 100000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction);

        setText( ' ')
        setAmount(0)

    }

    return (
        <>
            <h3 className='title is-4 has-text-centered'>Add new Transaction</h3>
              <form onSubmit={acceptValues}>
                <div className='box' id='addTransaction'>
                    <div class="field">
                        <label class="label">Text</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter description..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Amount</label>
                        <label class="label">(negative-expense, positive-income)</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-dollar-sign"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button class="button is-link" type='submit'>Add Transaction</button>
              </form>  
        </>
    )
}
