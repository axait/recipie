import React from 'react';
import AmountInput from './input/amouninput.jsx';
import { useState } from 'react';
import { dummyData } from './dummydata.jsx';

const IngredientsMenu = () => {
  // State to manage the active accordion
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion open/close
  const handleAccordionClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };


  return (
    <div className="ingredients-menu w-[500px] h-[calc(100vh-300px)] border-[3px] border-red-500 bg-[#FFF6DE] my-[20px] rounded-[20px]">
      <h2 className='ingredients-menu__title'>Ingredients Menu</h2>
      <div className="ingredients__list">
        <ul className='bg-blue-100 p-4 rounded-[15px] w-full h-[calc()] overflow-y-auto'>

          {/* From here a list starts */}
          {dummyData.map((ingredient) => (
            <li key={ingredient.id} onClick={() => handleAccordionClick(ingredient.id)}>
          <div className='ingredients-name_and_amount' >
            <label htmlFor={ingredient.name}>{ingredient.name}</label>
            <div className="ingredients-amount-input">
              <AmountInput />
            </div>

          </div>
          <p className={`description ${activeAccordion === ingredient.id ? 'show' : 'hidden'}`}>
            {ingredient.description}
          </p>
        </li>
        )
        )
        }
        {/* here list ends */}

      </ul>
    </div>
    </div >
  )
}

export default IngredientsMenu;