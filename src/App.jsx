import React from "react";
import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar/>
          <MoviesList/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
