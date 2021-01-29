import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [quotes, setQuotes] = useState('')

  let getQuotes = () => {
    let randomNumb = Math.floor(Math.random() * 20)
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setQuotes(data.results[randomNumb]))
  }

  const statusStyle = {
    color: "white"
  }

  if(quotes.status === "Dead") {
    statusStyle.color = "red"
  } else if(quotes.status === "Alive") {
    statusStyle.color = "#a4ca51"
  }


  return (
    <div className="App">
      <div className="quotes-container">
          <h1 className="quotes">{quotes.name}</h1>
          {quotes.status ? 
          <div className="character-info">
            <p>status: <span style={statusStyle}>{quotes.status}</span></p>
            <p>species: {quotes.species}</p>
            <p>gender: {quotes.gender}</p>
          </div> : <h1 className="quotes">Click the button below to generate a Rick and Morty character!</h1>}
      </div>
      <div className="get-quote">
        <button className="btn" onClick={getQuotes}>Get Character</button>
      </div>
    </div>
  )
}
