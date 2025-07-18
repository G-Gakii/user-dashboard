import React from "react";
import product from "../../assets/3d-square 1.png";
import discount from "../../assets/discount-shape 1.png";
import message from "../../assets/message-question 1.png";
import customer from "../../assets/user-square 1.png";
import income from "../../assets/wallet-money 2.png";
import key from "../../assets/key-square.png";
import setting from "../../assets/setting 1.png";
import evans from "../../assets/Ellipse 8.png";
import "./Siderbar.css";

const Sidebar = () => {
  return (
    <div className="siderbar__container">
      <section>
        <section className="sidebar__header">
          <img src={setting} alt="" />
          <h1 className="about">Dashboard</h1>
          <small className="about">v.01</small>
        </section>
        <section className="sidebar__header__section">
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={key} alt="" />
              <p className="about">Dashboard</p>
            </div>
            <span>&gt;</span>
          </div>
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={product} alt="" />
              <p className="about">product</p>
            </div>
            <span>&gt;</span>
          </div>
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={customer} alt="" />
              <p className="about">customer</p>
            </div>

            <span>&gt;</span>
          </div>
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={income} alt="" />
              <p className="about">income</p>
            </div>

            <span>&gt;</span>
          </div>
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={discount} alt="" />
              <p className="about">discount</p>
            </div>

            <span>&gt;</span>
          </div>
          <div className="sidebar__header__section__item">
            <div className="sidebar__header__section__item__v1">
              <img src={message} alt="" />
              <p className="about">help</p>
            </div>

            <span>&gt;</span>
          </div>
        </section>
      </section>

      <section>
        <div className="siderbar__container__promotion about">
          <p>Upgrade to PRO to get access all Features!</p>
          <button>Get pro now</button>
        </div>
        <div className="siderbar__container__user">
          <img src={evans} alt="" />
          <div className="about">
            <h3>Evano</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
