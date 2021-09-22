import React from "react"
import styles from "./Loader.module.css"
import Card from "../card/Card"

const Loader = ({ message }) => {
  return (
    <div className={styles.cardWrapper}>
      <Card>
        <svg
          className={styles.spinner}
          width="43"
          height="43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="a" fill="#fff">
            <path d="M.9847 27.932A21.5 21.5 0 1 0 13.1725 1.6782l2.0205 4.8093a16.2836 16.2836 0 1 1-9.2308 19.884L.9847 27.932Z" />
          </mask>
          <path
            d="M.9847 27.932A21.5 21.5 0 1 0 13.1725 1.6782l2.0205 4.8093a16.2836 16.2836 0 1 1-9.2308 19.884L.9847 27.932Z"
            stroke="#C4C4C4"
            strokeWidth="10"
            mask="url(#a)"
          />
          <mask id="b" fill="#fff">
            <path d="M40.8952 12.2224A21.4993 21.4993 0 0 0 19.8471.0636a21.5002 21.5002 0 0 0-18.832 27.9648 21.5 21.5 0 0 0 31.5404 11.9114l-2.6824-4.474A16.2834 16.2834 0 1 1 29.6451 7.4a16.2832 16.2832 0 0 1 6.5443 7.0734l4.7058-2.251Z" />
          </mask>
          <path
            d="M40.8952 12.2224A21.4993 21.4993 0 0 0 19.8471.0636a21.5002 21.5002 0 0 0-18.832 27.9648 21.5 21.5 0 0 0 31.5404 11.9114l-2.6824-4.474A16.2834 16.2834 0 1 1 29.6451 7.4a16.2832 16.2832 0 0 1 6.5443 7.0734l4.7058-2.251Z"
            stroke="#5453E0"
            strokeWidth="10"
            mask="url(#b)"
          />
        </svg>
        <span className={styles.message}>{message}</span>
      </Card>
    </div>
  )
}

export default Loader
