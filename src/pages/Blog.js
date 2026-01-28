import { useState, useEffect } from "react";
import "./Blog.css";
import Loader from "../pages/Loader";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      setLoading(true);
      fetch(
        `https://front2.edukacija.online/backend/wp-json/wp/v2/posts/?_embed`,
      )
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        })
        .finally(() => setLoading(false));
    }, [ ],  /*kada se neko stanje prije promjeni,pozovi useEffect/opet*/
  );

  return (
    <>

      {loading && <Loader /> /*ako je loading true, prikazi Loader komponentu*/}

      <div className="blog-page">
        <div className="container">
          <h1>Blog</h1>
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-4 mb-4 blog-post">
                <img
                  src={
                    post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .full.source_url
                  }
                  alt={post.title.rendered}
                />

                <Link to={`/blog/${post.slug}`}><h2>{post.title.rendered}</h2></Link>

                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
                <p>
                  {post._embedded.author[0].name} |{" "}
                  {new Date(post.date).toLocaleString("hr-HR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

/* autor se moze mapirati ovako,
<p>{post._embedded.author[0].name}</p>

i ovako-isto je
{post._embedded.author.map((author) => (
<p>{author.name}</p>
))} */
