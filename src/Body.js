import "./styles.css";

function Body(props) {
  const word = props.mode ? "light" : "dark";
  return (
    <div className={`body--${word} body`}>
      <h1 className={`body--heading--${word}`}>Fun facts about React</h1>
      <ul>
        <li>
          <p className={`list-item--${word}`}>Was first released in 2013</p>
        </li>
        <li>
          <p className={`list-item--${word}`}>
            Was originally created by Jordan Walke
          </p>
        </li>
        <li>
          <p className={`list-item--${word}`}>
            Has well over 100k stars on GitHub
          </p>
        </li>
        <li>
          <p className={`list-item--${word}`}>Is maintained by Facebook</p>
        </li>
        <li>
          <p className={`list-item--${word}`}>
            Powers thousands of enterprises apps, including mobile apps
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Body;
