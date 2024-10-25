import React from "react";
import Header from "./components/header/Header";
import MyRouter from "./routes/myRouter";
import CustomCursor from "./components/cursor/CustomCursor";

function App() {
  return (
    <div className="App">
      <Header />
      <MyRouter />
      <CustomCursor />
    </div>
  );
}

export default App;
