import "./styles.css";
import React from "react";

function Toggle(props) {
  const word = props.mode ? "light" : "dark";
  const opacitiyWordDark = props.mode ? "font--opacity" : "";
  const opacitiyWordLight = props.mode ? "" : "font--opacity";

  return (
    <div className="toggle">
      <h3
        className={`toggle--heading--light ${opacitiyWordLight} heading--${word}`}
      >
        Light
      </h3>
      <div className={`toggle--body--${word}`} onClick={props.onChange}>
        <div className={`toggle--button--${word}`}></div>
      </div>
      <h3
        className={`toggle--heading--dark ${opacitiyWordDark} heading--${word}`}
      >
        Dark
      </h3>
    </div>
  );
}

export default Toggle;
