import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from "./components/NewEventForm";



function App() {
  const [showModal, setShowModal] = useState(false)
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

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
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
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <div>
        <button onClick={handleOpen}>Open</button>
      </div>
      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <NewEventForm/>
      </Modal>}
    </div>
  );
}

export default App;
