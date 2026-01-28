import "./Blog.css";
import post from "../components/zadaci/data/blogsingle.json";
import Loader from "../pages/Loader";
import {useParams} from "react-router-dom";
import {useEffect, useState } from "react";


const BlogSingle = () => {

//prvo hvatamo slug sa kukom useParams
//zatim u useEffectu radimo fetch za pojedinacni post koristeci taj slug
//spremamo post u stanje
//prikazujemo post  

const {slug} = useParams();
const [post, setPost] = useState(null);    //dohvačamo postove i stavljamo null kao početno stanje

useEffect(() => {
  fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    .then((response) => response.json())
    .then((data) => setPost(data[0]));    // 0 se stavlja kao pozicija niza koji vraća API
}, [slug]);   //ovisnost je slug, kad se on promjeni, pozovi useEffect opet

if (!post) {
  return <Loader />;   //ako post nije učitan, prikazi Loader
}



  return (
    <div classNameName="blog-single">
      <div
        className="masthead"
        style={{
          backgroundImage: "url("+post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url + ")"
        }} >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>{post.title.rendered}</h1>
                <h2 className="subheading">podnaslov</h2>
                <span className="meta">
                  Autor:
                  <a href="#!">{post._embedded.author[0].name}</a>,
                  {new Date(post.date).toLocaleDateString("hr-HR")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              ></div>
            </div>
          </div>
        </div>
      </article>

     
    </div>
  );
};

export default BlogSingle;
