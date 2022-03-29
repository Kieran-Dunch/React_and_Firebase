import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'


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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}!</h2>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </React.Fragment>
      ))}
      <Modal>
        <h2>This is a modal!</h2>
        <p>Use the code STOP in checkout?</p>
      </Modal>
    </div>
  );
}

export default App;
