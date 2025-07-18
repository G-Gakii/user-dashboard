import React from "react";
import "./CustomerHeader.css";
import Search from "../Search/Search";

const CustomersHeader = () => {
  return (
    <div className="customer__header">
      <h1>Hello Evano 👋🏼,</h1>
      <Search style={{ backgroundColor: "ffffff" }} />
    </div>
  );
};

export default CustomersHeader;
