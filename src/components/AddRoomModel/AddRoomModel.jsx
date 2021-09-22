import React from "react"
import styles from "./AddRoomModel.module.css"
import TextInput from "../shared/textInput/TextInput"
const AddRoomModel = () => {
  return (
    <div className={styles.modelMask}>
      <div className={styles.modelBody}>
      <button className={styles.closeButton}>
          <img src="/images/close.png" alt="close" />
      </button>
        <div className={styles.modelHeader}>
          <h3 className={styles.heading}>Enter the topic to be discussed</h3>
          <TextInput fullWidth="true" />
          <h2 className={styles.subHeading}>Room types</h2>
          <div className={styles.roomTypes}>
            <div className={styles.typeBox}>
              <img src="/images/GlobeRoom.png" alt="globe" />
              <span>Open</span>
            </div>
            <div className={styles.typeBox}>
              <img src="/images/UsersRoom.png" alt="users" />
              <span>Social</span>
            </div>
            <div className={styles.typeBox}>
              <img src="/images/LockRoom.png" alt="lockRoom" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modelFooter}>
          <h2>Start a room, open to everyone</h2>
          <button className={styles.footerButton}>
            <img src="/images/exciteRoom.png" alt="excite" />
            <span>Let's go</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddRoomModel
