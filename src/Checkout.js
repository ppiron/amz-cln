import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/08_electric-vans/UK_eSprinter_Editorial-B1x._CB406519642_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <div className="checkout__title">
            <h3>Hello {user?.email}</h3>
            <h2>Your shopping basket</h2>
          </div>
          <div>
            {basket.map((item) => {
              return (
                <FlipMove
                  // easing="ease"
                  duration={500}
                  staggerDurationBy={30}
                  // staggerDelayBy={20}
                  enterAnimation="accordionVertical"
                  leaveAnimation="accordionVertical"
                >
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                </FlipMove>
              );
            })}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
