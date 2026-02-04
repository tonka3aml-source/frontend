import { useState, useEffect } from "react";
import Loader from "./Loader";

const Onama = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/pages/437`)
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

export default Onama;
