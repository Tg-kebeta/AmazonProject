import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import styles from './Header.module.css'
const LowerHeader = () => {
  return (
    <div className={styles.lowerContainer}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader