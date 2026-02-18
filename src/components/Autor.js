import React from "react";

const Autor = ({ post }) => {
  return (
    <span className="meta">
      Autor:
      <a href="#!">{post._embedded.author[0].name}</a>,
      {new Date(post.date).toLocaleDateString("hr-HR")}
    </span>
  );
};

export default Autor;
