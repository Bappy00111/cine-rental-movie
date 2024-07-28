import React, { useContext } from "react";
import Headers from "./Headers";
import Sidebar from "./Sidebar";
import MoviesList from "./MoviesList";
import Footer from "./Footer";
import { ThemContext } from "../context";

const Page = () => {
  const { drakMode } = useContext(ThemContext);
  return (
    <div className={`w-full h-full ${drakMode ? "dark" : ""}`}>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MoviesList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
