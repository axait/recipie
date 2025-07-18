import React, { useState } from 'react';

const AmountInput = ({ initialAmount }) => {
    const [currentAmount, setCurrentAmount] = useState(initialAmount);

    const increment = (e) => {
        e.stopPropagation()
        setCurrentAmount(prev => prev + 1);
    };

    const decrement = (e) => {
        e.stopPropagation()
        setCurrentAmount(prev => (prev > 0 ? prev - 1 : 0)); // no negative values
    };

    const handleChange = (e) => {
        e.stopPropagation()
        const value = parseInt(e.target.value, 10);
        setCurrentAmount(isNaN(value) ? 0 : value);
    };

    return (
        <div className="ingredients-amount-btns flex gap-2 items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={decrement} >−</button>
            <input
                type="number"
                className="amount-number w-[60px] text-center"
                value={currentAmount}
                min="0"
                onChange={handleChange}
            />
            <button onClick={increment} >+</button>
        </div>
    );
};

export default AmountInput;
