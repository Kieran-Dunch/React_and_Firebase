import './App.css'
import { useState } from 'react'
import Title from './components/Title'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Bowser's Live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
  const subtitle = "All the latest events in Mario Kingdom"

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle={subtitle} />
      {showEvents &&(
      <div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}!</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
