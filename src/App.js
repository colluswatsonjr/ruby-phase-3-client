import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
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
    setCharacters([...characters, character])
  }
  function handleCharacterDelete(id) {
    const updateCharacters = characters.filter((character) => character.id !== id);
    setCharacters(updateCharacters);
  }
  function handleCharacterUpdate(data) {
    const updateCharacters = characters.map((character) => {
      if (character.id === data.id) {
        return data
      } else {
        return character
      }
    })
    setCharacters(updateCharacters)
  }
  function handleNationCreate(nation) {
    setNations([...nations, nation])
  }
  function handleRoleCreate(role) {
    setRoles([...roles, role])
  }

  return (
    <div>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<DisplayCharacters characters={characters} nations={nations} roles={roles} onCharacterUpdate={handleCharacterUpdate} onCharacterDelete={handleCharacterDelete} />} />
        <Route path='/characters' element={<CreateCharacter nations={nations} roles={roles} characters={characters} onCharacterCreate={handleCharacterCreate} />} />
        <Route path='/nations' element={<CreateNation nations={nations} onNationCreate={handleNationCreate}/>} />
        <Route path='/roles' element={<CreateRole roles={roles} onRoleCreate={handleRoleCreate}/>} />
      </Routes >
    </div>
  );
}

export default App;
