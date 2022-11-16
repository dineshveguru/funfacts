import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Event from "./Event";
import Post from "./Post";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/post">Post</Link>
        <Routes>
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
