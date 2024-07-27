import React, { useState } from "react";
import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { MovieContext } from "./context";


const App = () => {
  const [cartData,setCartData] = useState([])
  return (
    <>
      <MovieContext.Provider value={{cartData,setCartData}}>
        <Headers />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MoviesList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
      
    </>
  );
};

export default App;
