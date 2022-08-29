import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import DisplayCharacters from './components/DisplayCharacters';
import CreateCharacter from './components/CreateCharacter';
import CreateNation from './components/CreateNation';
import CreateRole from './components/CreateRole';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/characters")
      .then((r) => r.json())
      .then((characters) => setCharacters(characters));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:9292/nations")
  //     .then((r) => r.json())
  //     .then((nations) => setNations(nations));
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:9292/roles")
  //     .then((r) => r.json())
  //     .then((roles) => setRoles(roles));
  // }, []);


  function handleCreateCharacter(newCharacter) {
    setCharacters([...characters, newCharacter])
  }
  function handleCharacterDelete(id) {
    const updateCharacters = characters.filter((character) => character.id !== id);
    setCharacters(updateCharacters);
  }
  function handleCharacterUpdate(data) {
    console.log(data)
    const updateCharacters = characters.map((character) => {
      if (character.id === data.id) {
        return data
      } else {
        return character
      }
    })
    setCharacters(updateCharacters)
  }
  return (
    <Routes>
      <Route path='/' element={
        <div className='App'>
          <ul className='Create'>
            <h1>Create!</h1>
            <li><CreateCharacter characters={characters} onCreateCharacter={handleCreateCharacter} /></li>
            <li><CreateNation /></li>
            <li><CreateRole /></li>
          </ul>
          <div>
            <DisplayCharacters onCharacterUpdate={handleCharacterUpdate} onCharacterDelete={handleCharacterDelete} />
          </div>
        </div>
      } />
    </Routes >
  );
}

export default App;
