import React from "react";
import { NavLink } from "react-router-dom";

const Hello = (props) => (
  <div className="hello">
    <span style={{ fontSize: "3em" }}>🍕</span>
    <br />
    <br />
    Привет, меня зовут Алексей.
    <br />
    ---------------------
    <br /> Я - <span className="spec">веб-разработчик</span> из Москвы.
    <br></br>
    <br />
    <NavLink to="/projects">
      <div id="btn" tabIndex="1">
        <span className="noselect">Посмотреть мои работы</span>
        <div id="circle"></div>
      </div>
    </NavLink>
  </div>
);
export default Hello;
