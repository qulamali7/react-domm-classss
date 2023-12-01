import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const Card = ({ x }) => {
  return (
    <>
      <Link to={"/detail/" + x.id} className="card-link">
        <div className="card product-card">
          <div className="card-img">
            <img src={x.image} alt="" />
          </div>
          <div className="card-text">
            {/* <p>
              <span>Id</span>:{x.id}
            </p> */}
            <p>
              <span>Title</span>:{x.title}
            </p>
            {/* <p>
              <span>Price</span>:{x.price}
            </p>
            <p>
              <span>Description</span>:{x.description.slice(0, 40)}
            </p>
            <p>
              <span>Category</span>:{x.category}
            </p> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
