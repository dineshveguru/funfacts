import Header from "./Header";
import Body from "./Body";
import React from "react";

function App() {
  const [mode, setMode] = React.useState(true);

  function change() {
    setMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Header mode={mode} onChange={change} />
      <Body mode={mode} onChange={change} />
    </div>
  );
}

export default App;
