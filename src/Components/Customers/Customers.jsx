import React from "react";
import customers from "../../utils/customers.json";
import "./Customers.css";
import Search from "../Search/Search";

const Customers = () => {
  console.log(customers);

  return (
    <div className="customer__container">
      <h2>All Customers</h2>
      <section className="members">
        <span>Active members</span>
        <div>
          <Search />
          <label>
            {" "}
            sort by:
            <select name="" id="">
              <option value="">Newest</option>
            </select>
          </label>
        </div>
      </section>
      <div className="table__container">
        <table>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
          {customers.map((customer) => (
            <tr key={customer.email}>
              <td>{customer.name} </td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td> {customer.email}</td>
              <td>{customer.country}</td>
              <td>
                {" "}
                <button
                  className={
                    customer.status === "Active" ? "activeb" : "inactive"
                  }
                >
                  {customer.status}
                </button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Customers;
