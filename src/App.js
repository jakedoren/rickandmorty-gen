import React, { useState } from 'react'
import './App.css'
import {FaRegSun} from 'react-icons/fa'
import {FaRegMoon} from 'react-icons/fa'
import {ThemeContextConsumer} from './context'

export default function App() {
  const [character, setCharacter] = useState('')

  let getCharacter = () => {
    let randomNumb = Math.floor(Math.random() * 20)
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results[randomNumb]))
  }

  const statusStyle = {
    color: "white"
  }

  if(character.status === "Dead") {
    statusStyle.color = "red"
  } else if(character.status === "Alive") {
    statusStyle.color = "#a4ca51"
  }


  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className="body" style={{backgroundColor: context.darkMode ? "#403f3f" : "#8edada" }}>
          <div className="App" style={{backgroundColor: context.darkMode ? "#6e6867" : "#3d7abc"}}>
        <div className="character-container" style={{backgroundColor: context.darkMode ? "black" : "#1c2047"}}>
            <h1 className="characters">{character.name}</h1>
            {character.status ? 
            <div className="character-info">
              <p>status: <span style={statusStyle}>{character.status}</span></p>
              <p>species: {character.species}</p>
              <p>gender: {character.gender}</p>
            </div> : <h1 className="characters">Click the button below to generate a Rick and Morty character!</h1>}
        </div>
        <div className="get-character" style={{backgroundColor: context.darkMode ? "#d1cac9" : "#a4ca51"}}>
          <button className="btn" onClick={getCharacter}>Get Character</button>
            <button className="btn" onClick={context.handleTheme}>{context.darkMode ? <FaRegSun /> : <FaRegMoon />}</button>
        </div>
      </div>
        </div>
        
      )}
    </ThemeContextConsumer>
    
  )
}
