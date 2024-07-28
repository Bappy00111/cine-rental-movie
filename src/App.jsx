import React, { useReducer, useState } from "react";
import { MovieContext, ThemContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components/Page";
import { cartReducer, initialState } from "./reducers/cartReducers";

const App = () => {
  // const [cartData, setCartData] = useState([]);
  const [drakMode, setDrakMode] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <ThemContext.Provider value={{ drakMode, setDrakMode }}>
          <Page />
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
        </ThemContext.Provider>
      </MovieContext.Provider>
    </>
  );
};

export default App;
