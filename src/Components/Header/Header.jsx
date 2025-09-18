import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
    <header className={styles.header}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </a>

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
        <a href="#" className={styles.link}>
          <div>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </div>
        </a>

        {/* Orders */}
        <a href="#" className={styles.link}>
          <div>
            <p>Returns</p>
            <span>& Orders</span>
          </div>
        </a>

        {/* Cart */}
        <a href="#" className={styles.cart}>
            <BiCart size={35 } />
          <span>0</span>
        </a>
      </div>
      </header>
      <LowerHeader/>
    </>
  );
};

export default Header;
