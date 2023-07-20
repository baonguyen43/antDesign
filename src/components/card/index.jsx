import React from 'react';

import { formatter, ratingStar } from 'helper';

import './card.css';

function Card(props) {
  const {
    id,
    discounted,
    image,
    shopName,
    newPrice,
    oldPrice,
    discount,
    productName,
    rate,
    stock,
    sold,
  } = props;

  return (
    <div className="card">
      <span className="discounted">
        {`-${discounted}%`}
      </span>

      <div className="card-header">
        <img className="product-image" src={image} alt="Product" />
      </div>

      <div className="card-body">
        <h5 className="shop_name">{shopName}</h5>
        <div className="break-line"/>

        <div className="price-wrapper">
          <p className="new_price">{formatter.format(newPrice)}</p>

          <p className="old_price">{formatter.format(oldPrice)}</p>

          <p className="discount">{discount}% off</p>
        </div>

        <p className="product_name">{productName}</p>

        <div className="product_rate">
          {ratingStar(rate)}
        </div>

        <progress className="product_progress" value={sold} max={stock} />

        <p className="product_sold">Sold: {sold}</p>
      </div>
    </div>
  );
}

export default Card;