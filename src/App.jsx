import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import Address from "./Pages/Address/Address";
import ManualAddress from "./Pages/ManualAddress/ManualAddress";
import Success from "./Pages/Success/Success";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/personal-info" element={<PersonalInfo />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/manual-address" element={<ManualAddress />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </div>
  );
};

export default App;
