import React from "react";
import { NavLink } from "react-router-dom";

const Hello = (props) => (
  <div className="hello">
    Привет, меня зовут Алексей Данилов.
    <br />
    ---------------------
    <br /> Я - <span className="spec">full-stack web developer</span> из Москвы.
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
