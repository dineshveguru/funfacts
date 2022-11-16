import React from "react";
//function component #1

// function Dinesh() {
//   return (
//     <div>
//       <h1>Bharadwaj is a good boy</h1>
//       <h1>Madan is as good as Bharadwaj</h1>
//     </div>
//   );
// }

// function component #2

const Dinesh = () => {
  const styles = {
    color: "red",
  };
  return (
    <div>
      <h1 style={{ color: "blue", fontSize: "65px" }}>harsha</h1>
      <h2>madan</h2>
    </div>
  );
};

// class components

// class Dinesh extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>dinesh</h1>
//         <h1>madan</h1>
//       </div>
//     );
//   }
// }
export default Dinesh;
