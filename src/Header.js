import "./styles.css";
import Toggle from "./Toggle";

function Header() {
  return (
    <div className="header">
      <div class="header--banner">
        <img src={require(`./images/logo.png`)} className="header--image" />
        <h1 className="header--heading">React facts</h1>
      </div>
      <Toggle />
    </div>
  );
}

export default Header;
