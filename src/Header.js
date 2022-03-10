import "./styles.css";
import Toggle from "./Toggle";
import React from "react";

function Header(props) {
  const word = props.mode ? "--light" : "--dark";
  return (
    <div className={`header${word} header`}>
      <div class="header--banner">
        <img src={require(`./images/logo.png`)} className="header--image" />
        <h1 className="header--heading">React facts</h1>
      </div>
      <Toggle mode={props.mode} onChange={props.onChange} />
    </div>
  );
}

export default Header;
