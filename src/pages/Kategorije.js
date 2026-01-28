import Loader from "./Loader";
import { useEffect, useState } from "react";

const Kategorije = () => {
  const[loading, setLoading] = useState(false);
  const [categoryes, setCategoryes] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");


  useEffect(() => {
    fetch("https://front2.edukacija.online/backend/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((data) => setCategoryes(data));
  }, []);



const handleCattegoryChange = (e) => {
  setSelectedCategory(Number(e.target.value));
}


console.log(selectedCategory)   //da vidimo što je ispod haube :)

  return (
    <div className="container blog-page">
      <div className="row">
        <div className="col-12 d-flex justify-content-center mt-5">
         <select value={selectedCategory} onChange={
          handleCattegoryChange}>
          <option value=""disabled>Oodaberite kategoriju</option>
           {categoryes.map((cat) => (
           <option key={cat.id}>{cat.name}</option>
          ))}
         </select>
        </div>
      </div>
    </div>
  );
};

export default Kategorije;
