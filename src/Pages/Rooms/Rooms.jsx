import React,{useState} from "react"
import AddRoomModel from "../../components/AddRoomModel/AddRoomModel"
import RoomCard from "../../components/RoomCard/RoomCard"
import styles from "./Rooms.module.css"
const rooms = [
  {
    id: 1,
    topic: "which framework best for frontend 1 ?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 2,
    topic: "which database best for backend 2?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 3,
    topic: "which framework best for frontend 3 ?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 4,
    topic: "which framework best for frontend 4?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 5,
    topic: "which framework best for frontend 5?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 6,
    topic: "which framework best for frontend 6?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 7,
    topic: "which framework best for frontend 7?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 8,
    topic: "which framework best for frontend 8?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
  {
    id: 9,
    topic: "which framework best for frontend 9?",
    speakers: [
      {
        id: 1,
        name: "john doe",
        avatar: "/images/monkey-avatar.png",
      },
      {
        id: 2,
        name: "ashish k",
        avatar: "/images/monkey-avatar.png",
      },
    ],
    totalPeople: 40,
  },
]
const Rooms = () => {
  const [showModel, setShowModel] = useState(false);
  function openModel(){
    setShowModel(true);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search.png" alt="search-logo" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModel} className={styles.startRoomButton}>
              <img src="/images/speak.png" alt="speak" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomList}>
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModel && <AddRoomModel />}
    </>
  )
}

export default Rooms
