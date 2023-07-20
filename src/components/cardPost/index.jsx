import React from 'react';

import { formatter, ratingStar } from 'helper';

import './card.css';

function CardPost(props) {
  const {
    body,
    title,
    userId,
  } = props;



  return (
    <div className="card">
      <div className="card-header">
        <img className="product-image" src="https://picsum.photos/200/300" alt="Product" />
      </div>

      <div className="card-body">
        <h5 className="shop_name">{title}</h5>
        <div className="break-line"/>

        <p className="product_name">{body}</p>

        <p className="product_sold">User: {userId}</p>
      </div>
    </div>
  );
}

export default CardPost;