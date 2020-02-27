import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeLayout from "./containers/Layout/HomeLayout";

function App() {
  return (
    <Router>
      <HomeLayout />
    </Router>
  );
}

export default App;
