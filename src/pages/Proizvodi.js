import { useState, useEffect } from "react";
import Loader from "../pages/Loader";

const Proizvodi = () => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/pages/439`)
      .then((response) => response.json())
      .then((data) => {
        setPage(data);
        console.log(data);
      });
  }, []);
  if (!page) return <Loader />;

  return (
    <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
  );
};

export default Proizvodi;
