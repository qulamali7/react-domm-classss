import React from "react";
import "./index.scss";
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
      <div className="detail-card">
          <div className="detail-card-img">
            <img src={data.image} alt="" />
          </div>
          <div className="detail-card-text">
            <p>
              <span>Id</span>:{data.id}
            </p>
            <p>
              <span>Title</span>:{data.title}
            </p>
            <p>
              <span>Price</span>:{data.price}
            </p>
            <p>
              <span>Description</span>:{data.description}
            </p>
            <p>
              <span>Category</span>:{data.category}
            </p>
          </div>
        </div>
    </>
  );
};

export default Detail;
