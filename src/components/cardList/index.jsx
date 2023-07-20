import React from 'react';
import Card from '../card';

import './cardList.css';

function CardList(props) {
  const { list } = props;

  return (
    <div className="card-wrapper">
      {list && list.length > 0 && list.map((p) => (
        <span key={p.id}>
          <Card
            discounted={p.discounted}
            image={p.image}
            shopName={p.shopName}
            newPrice={p.newPrice}
            oldPrice={p.oldPrice}
            discount={p.discount}
            productName={p.productName}
            rate={p.rate}
            stock={p.stock}
            sold={p.sold}
          />
        </span>
      ))}
    </div>
  );
}

export default CardList;
