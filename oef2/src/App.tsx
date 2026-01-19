// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Oef2 from "./components/Oef2";

function App() {
  return (
    <>
      <Oef2
        naam="test"
        soort="btn-primary"
        onClickBtn={() => console.log("button pressed!")}
      />
    </>
  );
}

export default App;
