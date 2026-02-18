import { useState, useEffect } from "react";
import Loader from "../pages/Loader";
// import FeaturedImg from "../components/FeaturedImg";

const Naslovnica = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(
          "https://front2.edukacija.online/backend/wp-json/wp/v2/pages/27",
        );
        if (!response.ok) {
          throw new Error("ne mogu pronaći podatke");
        }
        const data = await response.json();
        setPage(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPage();
  }, []);

  if (!page) return <Loader />;

  return (
    <>
      {/* <FeaturedImg page={page} fallback ="https://placehold.co/600x400" /> */}
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />;
    </>
  );
};

export default Naslovnica;

//FeaturedImg umetanje glavne naslovne slike ispred svega na stranicu , dodajemo fallback ako nema slike da ucita to
