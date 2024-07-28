import React, { useState } from "react";
import { MovieContext, ThemContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components/Page";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [drakMode,setDrakMode] = useState(true)
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemContext.Provider value={{drakMode,setDrakMode}}>
          <Page />
        </ThemContext.Provider>
      </MovieContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default App;
