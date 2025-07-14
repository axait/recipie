import React from 'react'
import './recipemenu.css'

const RecipeMenu = () => {

  function changeValue(delta) {
    const input = document.getElementById('recipe-amount-number');
    const min = parseInt(input.min) || 0;
    const current = parseInt(input.value) || 0;
    const next = current + delta;
    if (next >= min) {
      input.value = next;
    }
  }

  return (
    <div className='recipemenu-div'>

      <div className="ccmenu">
        <h3>Calulate</h3>
        <h3>Create</h3>
      </div>

      <div id="editbtn">
        <button >Edit</button>
      </div>

      <div className="selectionMenu">

        <div className="select-recipe-menu">
          <label for="recipe-name">Recipe:</label>
          <select id="recipe-name">
            <option value="">-- Select --</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
        </div>

        <div className="recipe-amount-div">
          <label for="language">Recipe:</label>
          <div className="recipe-amount-btns">
            <button onClick={() => changeValue(-1)}>−</button>
            <input type="number" id="recipe-amount-number" defaultValue="0" min="0" />
            <button onClick={() => changeValue(1)}>+</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecipeMenu