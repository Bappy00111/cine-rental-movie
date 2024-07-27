import React, { useContext, useState } from "react";
import logo from "../../src/assets/logo.svg";
import ring from "../../src/assets/ring.svg";
import shopping from "../../src/assets/shopping-cart.svg";
import moon from "../../src/assets/icons/moon.svg";
import CardDetel from "./CardDetel";
import { MovieContext } from "../context";

const Headers = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartData } = useContext(MovieContext);

  console.log(cartData)

  const handleCardShow = () => {
    console.log("click");
    setShowCart(true);
  };

  const handleClose = () => {
    setShowCart(false);
  };
  return (
    <header>
      {showCart && <CardDetel onClose={handleClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                onClick={handleCardShow}
                src={shopping}
                width="24"
                height="24"
                alt=""
              />
              {
                cartData.length > 0 && (
                  <span className="absolute top-[-12px] left-[28px] bg-primary text-white text-center p-[2px] w-[30px] h-[30px] rounded-full">{cartData.length}</span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
