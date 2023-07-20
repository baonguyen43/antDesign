import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { LOCATIONS } from 'constants/index';
import { formatter } from 'helper';
import {axiosAdmin} from 'helper/axiosClient';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to ={`${LOCATIONS.PRODUCTS_PAGE}/${record._id} `} > {text} </Link>
  },

  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: "5%"
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (text, r) => <span> {formatter.format(text)}  </span>, 
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    render: (text) => <span> {text || 0} %   </span>, 
  },
  {
    title: 'discountedPrice',
    dataIndex: 'discountedPrice',
    key: 'discountedPrice',
    render: (text, r) => <span> {formatter.format(text)}  </span>, 
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Categories',
    dataIndex: 'categories',
    key: 'categories',
    render: (text, r) => <span> {r.category.name}  </span>, 
  },
  {
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
    render: (text, r) => <span> {r.supplier.name}  </span>, 
  },
];



const ProductsPageAntd = () => {
  const [products,setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      const url = '/products'; 
      const res = await axiosAdmin.get(url);
      setProducts(res.data.payload);
    } catch (err) {
      console.error('««««« err »»»»»', err);
    }
  }

  useEffect (()=>{
    getProductsData();
  }, [])

  return(
    <Table rowKey="_id" columns={columns} dataSource={products}/> 
  )
}

export default ProductsPageAntd;