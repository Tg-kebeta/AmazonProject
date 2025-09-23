import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () => {

  const [{ basket },dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
  return item.amount + amount
  },0)


  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>USA</span>
              </div>
            </div>
          </div>
          {/* Search bar */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt="US Flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </div>
            {/* three componenets */}
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists </span>
            </Link>
            {/* Orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>

    // <section className={styles.fixed}>
    // <header className={styles.header}>
    //   {/* Top Section */}
    //   <div className={styles.topSection}>
    //     {/* Logo */}
    //     <Link to ="/" className={styles.logo}>
    //       <img
    //         src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    //         alt="Amazon Logo"
    //       />
    //     </Link>

    //     {/* Delivery Info */}
    //     <div className={styles.delivery}>
    //       <SlLocationPin className={styles.icon} />
    //       <div>
    //         <p>Delivered to</p>
    //         <span>Ethiopia</span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Search Bar */}
    //   <div className={styles.searchSection}>
    //     <select className={styles.select}>
    //       <option value="">All</option>
    //     </select>
    //     <input
    //       type="text"
    //       placeholder="Search product"
    //       className={styles.searchInput}
    //     />
    //     <button className={styles.searchButton}>
    //         <BsSearch size={ 25} />
    //     </button>
    //   </div>

    //   {/* Right Side Links */}
    //   <div className={styles.rightSection}>
    //     {/* Language Selector */}
    //     <div className={styles.language}>
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
    //         alt="US Flag"
    //       />
    //       <select>
    //         <option value="">EN</option>
    //       </select>
    //     </div>

    //     {/* Account */}
    //     <Link to="/auth" className={styles.link}>
    //       <div>
    //         <p>Sign In</p>
    //         <span>Account & Lists</span>
    //       </div>
    //     </Link>

    //     {/* Orders */}
    //     <Link to="/Orders" className={styles.link}>
    //       <div>
    //         <p>Returns</p>
    //         <span>& Orders</span>
    //       </div>
    //     </Link>

    //     {/* Cart */}
    //     <Link to="/Cart" className={styles.cart}>
    //         <BiCart size={35 } />
    //         <span>{totalItem}</span>
    //     </Link>
    //   </div>
    //   </header>
    //   <LowerHeader/>
    // </section>
  );
};

export default Header;
