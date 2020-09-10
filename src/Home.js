import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={1}
            title="Andrex wants everyone to feel as clean as possible. Andrex Gentle Clean is designed with this in mind. It is fragrance-free, dermatologically tested and embossed with puppies to give you and your family a gentle clean."
            image="https://images-na.ssl-images-amazon.com/images/I/71ys0ykrj5L._AC_SL1089_.jpg"
            price={16.88}
            rating={3}
          />
          <Product
            id={2}
            title="Powerful. Portable. Packed with cleaning technologies from top to toe. Shark’s signature DuoClean floor head is now enhanced with Anti Hair Wrap Technology."
            image="https://images-na.ssl-images-amazon.com/images/I/712WfR7eeEL._AC_SL1500_.jpg"
            price={49.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="For four years Jessica has never doubted that her sister Isabel’s death was an accident. But when Jessica’s young daughter seems to know long-forgotten details about her aunt’s past."
            image="https://m.media-amazon.com/images/I/41xSsQzuVpL._SY346_.jpg"
            price={9.99}
            rating={1}
          />
          <Product
            id={4}
            title="Apple iPad 10.2 32GB Wi-Fi - Space Grey (Renewed). This product works and looks like new. Backed by the 1-year Amazon Renewed Guarantee."
            image="https://images-na.ssl-images-amazon.com/images/I/61mXrcMU6LL._AC_SL1500_.jpg"
            price={298.99}
            rating={4}
          />
          <Product
            id={5}
            title="An efficient, wireless MFP with fax for high-quality colour. Save time with Smart Tasks in HP Smart app, and print and scan from your phone. Get seamless connections and strong security designed to help detect and stop attacks."
            image="https://images-na.ssl-images-amazon.com/images/I/71gZIm-TrXL._AC_SL1500_.jpg"
            price={690.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Aioneus iPhone Charger Cables 2M 3Pack (Blue, Orange, Green) - Stronger iPhone charging cable, Reliable iPhone lightning cable, Simpler life."
            image="https://images-na.ssl-images-amazon.com/images/I/61d-kmddMJL._AC_SL1000_.jpg"
            price={9.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
