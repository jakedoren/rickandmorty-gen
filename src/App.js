import React, { useState } from 'react'
import './App.css'

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
    <div className="App">
      <div className="character-container">
          <h1 className="characters">{character.name}</h1>
          {character.status ? 
          <div className="character-info">
            <p>status: <span style={statusStyle}>{character.status}</span></p>
            <p>species: {character.species}</p>
            <p>gender: {character.gender}</p>
          </div> : <h1 className="characters">Click the button below to generate a Rick and Morty character!</h1>}
      </div>
      <div className="get-character">
        <button className="btn" onClick={getCharacter}>Get Character</button>
      </div>
    </div>
  )
}
