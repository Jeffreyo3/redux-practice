import React from 'react';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser';


function App() {
  return (
    <div className="App">
      <Users />
      {/* <Quotes /> */}
      <AddUser />
    </div>
  );
}

export default App;
