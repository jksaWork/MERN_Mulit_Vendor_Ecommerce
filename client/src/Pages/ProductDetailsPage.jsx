import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { productData } from "../static";
import { Footer, Header } from "../components";
// import {}
import ProductDetails from "../components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  //   const { allProducts } = useSelector((state) => state.products);
  //   const { allEvents } = useSelector((state) => state.events);
  const { id, name } = useParams();
  const [data, setData] = useState(null);
  //   const [searchParams] = useSearchParams();
  //   const eventData = searchParams.get("isEvent");
  //   useSelector

  useEffect(() => {
    console.log(name);
    const data1 = productData.find(
      (el) => el.name == name.replaceAll("-", " ")
    );
    setData(data1);
  }, []);
  // Hello World
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {/* {!eventData && <>{data && <SuggestedProduct data={data} />}</>} */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
