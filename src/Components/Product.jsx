import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { allfilter } from "../myFunction";
import Card from "./Card/Card";

const Product = ({ data, search }) => {
  const [err, setErr] = useState("");
  const [newData, setNewData] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
const {cart} = useGlobalContext()
  useEffect(() => {
    if (location) {
  
      setNewData([...data]);
      let productsData = allfilter(data, searchParams);
      productsData == "No Data Found" ? setErr("No Data Found") : setNewData([...productsData]);
      
    }
  }, [location.search,cart.length]);
  console.log("i am rendering")
  // if(err=="No Data Found") return <h1>{err}</h1>  
  return (
    <div className="products">
      {newData?.length > 0
        ? newData
            ?.filter((e) => {
              if (search === "") {
                return e;
              } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
                return e;
              }
            })
            .map((e) => <Card key={e.id} e={e} />)
        : data
            ?.filter((e) => {
              if (search === "") {
                return e;
              } else if (e.name.toLowerCase().includes(search.toLowerCase())) {
                return e;
              }
            })
            .map((e) => <Card key={e.id} e={e} />)}
    </div>
  );
};

export default Product;
