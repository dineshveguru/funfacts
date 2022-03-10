import "./styles.css";

function Toggle() {
  return (
    <div className="toggle">
      <h3>Light</h3>
      <div className="toggle--body">
        <div className="toggle--button"></div>
      </div>
      <h3>Dark</h3>
    </div>
  );
}

export default Toggle;
