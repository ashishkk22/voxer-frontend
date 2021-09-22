import React from "react"
import styles from "./RoomCard.module.css"
const RoomCard = ({ room }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.topic}>{room.topic}</h3>
      <div className={styles.speakers}>
        <div className={styles.avatar}>
          {room.speakers.map(speakers => (
            <img key={speakers.id} src={speakers.avatar} alt="speaker" />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map(speakers => (
            <div key={speakers.id} className={styles.nameWrapper}>
              <span>{speakers.name}</span>
              <img src="/images/chat-bubble.png" alt="chat" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img src="/images/peoples.png" alt="available-people" />
      </div>
    </div>
  )
}

export default RoomCard
