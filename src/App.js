import Header from "./Header";
import Body from "./Body";
import React from "react";
// const ytdl = require("ytdl-core");
// const fs = require("fs");
import Dinesh from "./tutor/Dinesh";
import Props from "./tutor/Props";
import Event from "./tutor/Event";
import Post from "./tutor/Post";
import Routing from "./tutor/Routing";
import Counter from "./Redux/Counter";

function App() {
  // const [mode, setMode] = React.useState(true);

  // function change() {
  //   setMode((prevMode) => !prevMode);
  // }

  // ytdl("https://www.youtube.com/watch?v=JltDtcPsrqI", )

  return (
    <div className="App">
      {/* <Header mode={mode} onChange={change} />
      <Body mode={mode} onChange={change} /> */}
      {/* <Dinesh /> */}
      {/* <Props /> */}
      {/* <Event /> */}
      {/* <Post /> */}
      {/* <Routing /> */}
      <Counter />
    </div>
  );
}

export default App;
