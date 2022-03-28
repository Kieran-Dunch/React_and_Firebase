import './App.css'
import { useState } from 'react'

function App() {

  let [name, setName] = useState('mario')

  const handleClick = () => {
    setName('luigi')
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
