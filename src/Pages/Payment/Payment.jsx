// import React from "react";
import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { red } from "@mui/material/colors";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../Api/axios";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
function Payment() {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return amount + (item?.amount ?? 0);
  }, 0);

  const total = basket.reduce((amount, item) => {
    return amount + item.price * item.amount;
  }, 0);
  const [cardError, setcardError] = useState(null);
  const [processing, setprocessing] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const navigate =useNavigate()

  const handleChange = (e) => {
    e?.error?.message ? setcardError(e?.error?.message) : setcardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setprocessing(true);
      //backend\\function contact to get the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      //client side confirmation
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      const {paymentIntent} = confirmation
      //after the confirmation order firestore database save,clear

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      //empty the basket//
      dispatch({ type: Type.EMPTY_BASKET });

      setprocessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });

    } catch (error) {
      console.log(error);
      setprocessing(false);
    }
  };

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>Checkout({totalItem})items</div>
      {/* payment method */}
      <section className={classes.Payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Adress</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago,IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && <small style={{ color: red }}>{cardError}</small>}
                {/* CardElement */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
