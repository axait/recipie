import React from 'react'

const AmountInput = (props) => {
    return (
        <div className="ingredients-amount-btns" >
            <button onClick={() => props.decrement()}>−</button>
            <input type="number" className="amount-number" defaultValue="0" min="0" />
            <button onClick={() => props.increment()}>+</button>
        </div>
    )
}

export default AmountInput;