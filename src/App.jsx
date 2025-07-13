// import { useState } from 'react'
import './App.css'
import Profile from './profile.jsx'

function App() {
  let username = "johndoe";
  let email = "johndoe@example.com";

  return (
    <>
      <Profile username={username} email={email} />
      Recipies App
    </>
  )
}

export default App
