import React from "react";
import Card from "../Card";
import { useState, useEffect } from "react";
import "./index.scss";
const Cards = () => {
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <div className="cards">
      {data.map((x) => (
        <Card x={x}/>
      ))}
    </div>
  );
};

export default Cards;
