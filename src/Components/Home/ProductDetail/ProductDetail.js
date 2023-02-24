import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState([])
    let {singleProduct}=useParams()
   


  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);


useEffect(()=>{
    const mahee= products.filter(x => x?._id === singleProduct); 
    setDetail(mahee)
    console.log(detail, 'this is from ami ')
},[singleProduct, products]);



    return (
        <div>
           {detail && detail.map(data=> {
           return <h1>df {data?._id} {data?.category} </h1>
           }
           
           )}
            
        </div>
    );
};

export default ProductDetail;