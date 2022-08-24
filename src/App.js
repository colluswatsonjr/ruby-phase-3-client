import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Display from './components/Display';
import Create from './components/Create';

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

  return (
    <div className="App">
      
      <Create/>
      <Display characters={characters} nations={nations} roles={roles}/>

      <Routes>
        <Route path='/create' element={<Create/>} />
        <Route path='/display' element={<Display characters={characters} nations={nations} roles={roles}/>} />
      </Routes>
    </div>
  );
}

export default App;
