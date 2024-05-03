import React from 'react';
import './App.css'; 
import Brand from './components/Brand';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <Brand />
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
