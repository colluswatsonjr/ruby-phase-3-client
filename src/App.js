import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import DisplayCharacters from './components/DisplayCharacters';
import CreateCharacter from './components/CreateCharacter';
import CreateNation from './components/CreateNation';
import CreateRole from './components/CreateRole';

function App() {
  const [characters, setCharacters] = useState([])
  const [nations, setNations] = useState([])
  const [roles, setRoles] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/characters")
      .then((r) => r.json())
      .then((characters) => setCharacters(characters));
  }, []);
  useEffect(() => {
    fetch("http://localhost:9292/nations")
      .then((r) => r.json())
      .then((nations) => setNations(nations));
  }, []);
  useEffect(() => {
    fetch("http://localhost:9292/roles")
      .then((r) => r.json())
      .then((roles) => setRoles(roles));
  }, []);


  function handleCharacterCreate(character) {
    console.log(character)
    setCharacters([...characters, character])
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
  function handleNationCreate(nation){
    console.log(nation)
    setNations([...nations, nation])
  }  
  function handleRoleCreate(role){
    console.log(role)
    setRoles([...roles, role])
  }
  console.log(characters)
  console.log(nations)
  console.log(roles)
  return (
    <Routes>
      <Route path='/' element={
        <div className='App'>
          <h1>APP!!!</h1>
          <ul className='Create'>
            <h1>Create!!</h1>
            <li><CreateCharacter nations={nations} roles={roles} onCharacterCreate={handleCharacterCreate} /></li>
            <li><CreateNation nations={nations} onNationCreate={handleNationCreate} /></li>
            <li><CreateRole roles={roles} onRoleCreate={handleRoleCreate}/></li>
          </ul>
          <div className='Display'>
            <h1>Display!!</h1>
            <DisplayCharacters characters={characters} onCharacterUpdate={handleCharacterUpdate} onCharacterDelete={handleCharacterDelete} />
          </div>
        </div>
      } />
    </Routes >
  );
}

export default App;
