import { useState } from "react";
import Header from "./components/Header";
import CreateInput from "./components/CreateInput";

function App() {
  return (
    <div className="main-container">
      <Header />
      <body>
        <CreateInput />
      </body>
    </div>
  );
}

export default App;
