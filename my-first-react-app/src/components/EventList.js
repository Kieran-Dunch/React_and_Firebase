import styles from './EventList.module.css'

export default function EventList(props) {
  return (
    <div>
      {props.events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>{index} - {event.title}!</h2>
          <button onClick={() => props.handleClick(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
  )
}
