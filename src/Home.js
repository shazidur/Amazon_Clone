import React from "react";
import "./Home.css";
import Products from "./Products";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./slider/1.jpg";
import image2 from "./slider/2.jpg";
import image3 from "./slider/3.jpg";
import image4 from "./slider/4.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* Slider here */}

        {/* <img className={"home__imag"} src={image1} alt="#" /> */}
        {/* <img className={"home__imag"} src={image2} alt="food-2" /> */}
        {/* {/* <img className={"home__imag"} src={image2} alt="food-2" /> */}
        <img className={"home__imag"} src={image3} alt="food-3" />
        {/* <img className={"home__imag"} src={image4} alt="food-4" /> */}

        <div className="home__row">
          <Products
            id="11"
            title="the first product title from the Homefirst product title from the Homefirst product title from the Homefirst product title from the Home"
            price={34.44}
            image="https://images-na.ssl-images-amazon.com/images/I/419UGp1CsQL._SX331_BO1,204,203,200_.jpg"
            rating={3}
          />

          <Products
            id="22"
            title="the first product the first product title m the Homefirst product title from the Homefirst product title from the Home title from the Home"
            price={34.44}
            image="https://cdn.moglix.com/p/8gQuuJRAwu54u.png"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Products
            id="33"
            title="the first product title from the Home"
            price={34.44}
            image="https://cdn.shopify.com/s/files/1/0747/1405/products/191_0e4f02ef-344d-4568-af3c-ae5bfae3ed23_grande.jpg?v=1539976604"
            rating={3}
          />
          <Products
            id="44"
            title="the first product title from the Home"
            price={34.44}
            image="https://gloimg.gbtcdn.com/storage/item/6615272824267153408/15949/e9f4a80df1f7.jpg_500x500.jpg"
            rating={3}
          />
          <Products
            id="55"
            title="the first product title from the Home"
            price={34.44}
            image="https://cdn.vox-cdn.com/thumbor/n3Lnib4cJoYAM2b6rnxoq2dbWdY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/16304826/Echo_Show_5__Charcoal__Shutter_Closed.png"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Products
            id="66"
            title="the the first product title from the Homefirst product title from the Homefirst product title from the Homefirst product title from the Homefirst product title from the Home"
            price={34.44}
            image="https://steveanderson.com/wp-content/uploads/2018/02/2018-03-LG-38-Curved-Widescreen.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
