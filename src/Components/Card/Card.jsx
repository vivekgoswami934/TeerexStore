import React from "react";
import { useGlobalContext } from "../../Context";
import Counter from "../Counter";
import "./Card.css";

const Card = ({ e }) => {
  const { cart, setCart } = useGlobalContext();

  const handleClick = () => {
    setCart([...cart, e]);
  };

  // console.log("vdakjsd" ,cart.includes(e))

   const check  = ( id ) => {
      const data = cart.filter(el => el.id == id)
     console.log(data)
      return data.length ? true : false
   }


  return (
    <div className="card">
      <div className="product_name">{e.name}</div>
      <img className="product_image" style={{border : "4px solid white"}} src={e.imageURL} alt={e.name}  />
      <div>Type: {e.type}</div>
      <div>Gender: {e.gender}</div>
      <div>Quantity: {e.quantity}</div>
      <div>Color: {e.color}</div>
      <div className="bottom_section">
        <div className="product_price">Rs {e.price}</div>
        {check(e.id) ? (
          <Counter e={e} />
        ) : (
          <button className="add_to_cart" onClick={handleClick}>  Add to Cart </button>
        )}
      </div>
    </div>
  );
};

export default Card;
