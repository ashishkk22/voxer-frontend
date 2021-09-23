import React, { useState } from "react"
import styles from "./AddRoomModel.module.css"
import TextInput from "../shared/textInput/TextInput"
import { createRoom as create } from "../../http"
import {useHistory} from 'react-router-dom';
const AddRoomModel = ({ onClose }) => {
  const history = useHistory();
  const [roomType, setRoomType] = useState("open")
  const [topic, setTopic] = useState("")
  
  async function createRoom() {
    //server call
    try {
      if (!topic) return
      const { data } = await create({ topic, roomType })
      history.push(`/room/${data.id}`);
      
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className={styles.modelMask}>
      <div className={styles.modelBody}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.modelHeader}>
          <h3 className={styles.heading}>Enter the topic to be discussed</h3>
          <TextInput
            fullwidth="true"
            value={topic}
            onChange={e => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room types</h2>
          <div className={styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.typeBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src="/images/GlobeRoom.png" alt="globe" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.typeBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src="/images/UsersRoom.png" alt="users" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${styles.typeBox} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src="/images/LockRoom.png" alt="lockRoom" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modelFooter}>
          <h2>Start a room, open to everyone</h2>
          <button onClick={createRoom} className={styles.footerButton}>
            <img src="/images/exciteRoom.png" alt="excite" />
            <span>Let's go</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddRoomModel
