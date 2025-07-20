import React from "react";
import "./Analytic.css";
import monitor from "../../assets/monitor.svg";
import people from "../../assets/profile-2user.png";
import profileTick from "../../assets/profile-tick.svg";

const Analytic = () => {
  return (
    <div className="analytic__container">
      <div className="analytic__container__block">
        <img src={people} alt="" width={64} height={64} />
        <section>
          <p className="analytic__container_para">Total customers</p>
          <h2>5423</h2>
          <p>
            <span className="total__customers">&#8593; 16%</span>this month
          </p>
        </section>
      </div>
      <div className="line"></div>
      <div className="analytic__container__block">
        <img src={profileTick} alt="" width={64} height={64} />
        <section>
          <p className="analytic__container_para">Members</p>
          <h2>1893</h2>
          <p>
            <span className="total__members">&#8595; 1%</span>this month
          </p>
        </section>
      </div>
      <div className="line"></div>
      <div className="analytic__container__block">
        <img src={monitor} alt="" width={64} height={64} />
        <section>
          <p className="analytic__container_para">Active now</p>
          <h2>189</h2>
        </section>
      </div>
    </div>
  );
};

export default Analytic;
