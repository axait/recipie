// import { useState } from 'react'
import './App.css'
import Profile from './Components/profile.jsx'
import RecipeMenu from './Components/recipemenu.jsx'
import IngredientsMenu from './Components/ingredientsmenu.jsx'
import 'animate.css';
import './styles/main.scss';
import {dummyData} from './Components/dummydata.jsx'; // Assuming you have a dummyData.jsx file with the data


function App() {
  let username = "johndoe";
  let email = "johndoe@example.com";

  return (
    <div className="flex justify-center ">
      <div>
        <Profile username={username} email={email} />
        <RecipeMenu />
        <IngredientsMenu data={dummyData} />
      </div>
    </div>
  )
}

export default App
