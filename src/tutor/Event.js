import React from "react";

const Event = () => {
  const [one, setOne] = React.useState("fuck");

  const [num, setNum] = React.useState(0);
  function changeHandler(event) {
    setOne(event.target.value);
  }

  function addHandler() {
    setNum((prevVal) => {
      prevVal = num;
      prevVal += 1;
      return prevVal;
    });
  }
  return (
    <div>
      <input
        placeholder="enter your name"
        name="ugi"
        type="text"
        value={one}
        onChange={changeHandler}
      />
      <h1>{one}</h1>
      <h1>{num}</h1>
      <button onClick={addHandler}>increment</button>
    </div>
  );
};

export default Event;
