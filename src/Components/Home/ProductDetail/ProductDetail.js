import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [products, setProducts] = useState([]);

    let {singleProduct}=useParams()
    console.log(products,' hedar baal')

  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);
    return (
        <div>
            <h1> Hello I this is product page {singleProduct} </h1>
        </div>
    );
};

export default ProductDetail;