import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Card = ({ x }) => {
  return (
    <>
      <Link to={"/detail/"+x.id}>
        <ul className="card product-card">
          <div className="card-img">
            <div className="icon">
              <i className="fa-regular fa-heart"></i>
            </div>
            <img src={x.image} alt="" />
          </div>
          <li>
            <b>Id</b>:{x.id}
          </li>
          <li>
            <b>Title</b>:{x.title}
          </li>
          <li>
            <b>Price</b>:{x.price}
          </li>
          <li>
            <b>Description</b>:{x.description.slice(0, 40)}
          </li>
          <li className="category">
            <b>Category</b>:{x.category}
          </li>
        </ul>
      </Link>
    </>
  );
};

export default Card;
