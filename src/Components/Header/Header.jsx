import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () => {

  const [{ basket },dispatch]=useContext(DataContext)





  return (
    <>
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Logo */}
        <Link to ="/" className={styles.logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        {/* Delivery Info */}
        <div className={styles.delivery}>
          <SlLocationPin className={styles.icon} />
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <select className={styles.select}>
          <option value="">All</option>
        </select>
        <input
          type="text"
          placeholder="Search product"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
            <BsSearch size={ 25} />
        </button>
      </div>

      {/* Right Side Links */}
      <div className={styles.rightSection}>
        {/* Language Selector */}
        <div className={styles.language}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
            alt="US Flag"
          />
          <select>
            <option value="">EN</option>
          </select>
        </div>

        {/* Account */}
        <Link to="#" className={styles.link}>
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
        </Link>

        {/* Orders */}
        <Link to="/Orders" className={styles.link}>
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
        </Link>

        {/* Cart */}
        <Link to="/Carts" className={styles.cart}>
            <BiCart size={35 } />
            <span>{basket.length}</span>
        </Link>
      </div>
      </header>
      <LowerHeader/>
    </>
  );
};

export default Header;
