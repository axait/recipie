import React from 'react';
import AmountInput from './input/amouninput.jsx';

const IngredientsMenu = () => {
  return (
    <div className="ingredients-menu w-[500px] h-[calc(100vh-300px)] border-[3px] border-red-500 bg-[#FFF6DE] my-[20px] rounded-[20px]">
      <h2 className='ingredients-menu__title'>Ingredients Menu</h2>
      <div className="ingredients__list">
        <ul className='bg-blue-100 p-4 rounded-[15px] w-full h-[calc()] overflow-y-auto'>

          {/* From here a list starts */}
          <li>
            <div className='ingredients-name_and_amount' >
              <label htmlFor="flour">Flour</label>
              <div className="ingredients-amount-input">
                <AmountInput />
              </div>

            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni, tempora fuga sint odio ut.
            </p>
          </li>
          {/* here list ends */}

          {/* From here a list starts */}
          <li>
            <div className='ingredients-name_and_amount' >
              <label htmlFor="flour">Flour</label>
              <div className="ingredients-amount-input">
                <AmountInput />
              </div>

            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magni, tempora fuga sint odio ut.
            </p>
          </li>
          {/* here list ends */}

        </ul>
      </div>
    </div>
  )
}

export default IngredientsMenu;