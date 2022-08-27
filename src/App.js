import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Display from './components/Display';
import CreateCharacter from './components/CreateCharacter';

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

  function handleCharacterUpdate(data){
    console.log(data)
    const updateCharacters = characters.map((character)=>{
      if(character.id === data.id){
        return data
      }else{
        return character
      }
    })
    setCharacters(updateCharacters)
  }
  function handleCreateCharacter(newCharacter){
    setCharacters([...characters, newCharacter])
  }
  function handleCharacterDelete(id){
    const updateCharacters = characters.filter((character)=> character.id !== id);
    setCharacters(updateCharacters);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <CreateCharacter onCreateCharacter={handleCreateCharacter}/>
            <Display characters={characters} nations={nations} roles={roles} onCharacterUpdate={handleCharacterUpdate} onCharacterDelete={handleCharacterDelete} />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
