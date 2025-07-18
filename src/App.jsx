// import { useState } from 'react'
import './App.css'
import Profile from './Components/profile.jsx'
import RecipeMenu from './Components/recipemenu.jsx'
import IngredientsMenu from './Components/ingredientsmenu.jsx'
import 'animate.css';
import './styles/main.scss';


function App() {
  let username = "johndoe";
  let email = "johndoe@example.com";

  return (
    <div className="flex justify-center ">
      <div>
        <Profile username={username} email={email} />
        <RecipeMenu />
        <IngredientsMenu />
      </div>
    </div>
  )
}

export default App
