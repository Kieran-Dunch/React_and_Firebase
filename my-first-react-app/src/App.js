import './App.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('mario')

  const [events, useEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's Live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = () => {
    setName('luigi')
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}!</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
