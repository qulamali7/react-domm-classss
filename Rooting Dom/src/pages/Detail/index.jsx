import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
      <ul className="card product-card">
        <div className="card-img">
          <div className="icon">
            <i className="fa-regular fa-heart"></i>
          </div>
          <img src={data.image} alt="" />
        </div>
        <li>
          <b>Id</b>:{data.id}
        </li>
        <li>
          <b>Title</b>:{data.title}
        </li>
        <li>
          <b>Price</b>:{data.price}
        </li>
        <li>
          <b>Description</b>:{data.description}
        </li>
        <li className="category">
          <b>Category</b>:{data.category}
        </li>
      </ul>
    </>
  );
};

export default Detail;
