import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const Kategorije = () => {
  const [loading, setLoading] = useState(false);
  const [categoryes, setCategoryes] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((data) => setCategoryes(data));
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    setLoading(true);
    fetch(
      `https://front2.edukacija.online/backend/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const handleCattegoryChange = (e) => {
    setSelectedCategory(Number(e.target.value));
    setPosts([]);
  };

  console.log(selectedCategory); //da vidimo što je ispod haube :)

  return (
    <>
      {loading && <Loader />}
      <div className="container blog-page">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <select value={selectedCategory} onChange={handleCattegoryChange}>
              <option value="" disabled>
                Oodaberite kategoriju
              </option>
              {categoryes.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4 blog-post">
              <img
                src={
                  post._embedded["wp:featuredmedia"][0].media_details.sizes.full
                    .source_url
                }
                alt={post.title.rendered}
              />

              <Link to={`/blog/${post.slug}`}>
                <h2>{post.title.rendered}</h2>
              </Link>

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
    </>
  );
};

export default Kategorije;
