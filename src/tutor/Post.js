import axios from "axios";
import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: err });
      });
  }
  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>list of posts</h1>
        {posts.length > 0 ? (
          posts.map((item) => <h3 key={item.id}>{item.title}</h3>)
        ) : (
          <h1>{errorMsg}</h1>
        )}
      </div>
    );
  }
}

export default Post;
