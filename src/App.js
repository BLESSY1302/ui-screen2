import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Updated import
import Login from "./components/Login";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Edit from "./components/Edit";
import Comp from "./components/Comp";



// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Create from "./components/Create";
// import Delete from "./components/Delete";
// import Edit from "./components/Edit";
// import Comp from "./components/Comp"; // Make sure this line is present

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/comp" element={<Comp />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default App;
