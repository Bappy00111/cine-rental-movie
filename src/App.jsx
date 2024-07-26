import React from "react";
import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Headers />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar/>
        </div>
      </main>
    </div>
  );
};

export default App;
