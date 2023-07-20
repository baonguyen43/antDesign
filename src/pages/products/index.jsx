import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardList from 'components/cardList';

function ProductsPage(props) {
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const url = 'https://64a021baed3c41bdd7a707f1.mockapi.io/products';
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <CardList list={products} />
  ;
}

export default ProductsPage;