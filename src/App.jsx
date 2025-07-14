// import { useState } from 'react'
import './App.css'
import Profile from './Components/profile.jsx'
import RecipeMenu from './Components/recipemenu.jsx'
import 'animate.css';

function App() {
  let username = "johndoe";
  let email = "johndoe@example.com";

  return (
    <>
      <Profile username={username} email={email} />
      <RecipeMenu />
      
      {/* <h1>Recipies App</h1>
      <h4>Make First Part Of recipie</h4>
      <h4>Don't Forget to use NeuMorphism For Cool Colors, Shadows, etc</h4> */}
    </>
  )
}

export default App
