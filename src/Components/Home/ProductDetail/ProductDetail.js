import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import FlashSale from '../FlashSale/FlashSale';
import FlashSaleSingle from '../FlashSale/FlashsaleSingle';
import SmartPhoneArea from '../SmartPhoneArea/SmartPhoneArea';
import './productdetail.css'
const ProductDetail = () => {
    const [products, setProducts] = useState([]);
    const [number,setNumber]=useState(0)
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

const increase=()=>{
  setNumber(number+1)
}
const decrease=()=>{
  setNumber(number-1)
}

    return (
        <div>
           {detail && detail.map(data=> {
           return <div>

            {/* the upper side  */}

            <div class="flex flex-row">
  <div class="basis-1/2 p-10">

    <img src={data?.image} className="zoom" alt='hello '></img>
  </div>
  <div class="basis-1/2 p-10">

<h1 className="font-bold"> Headphones </h1>
<h1 className="text-4xl font-bold my-4" >Desktop Webcam, HD 720p Widescreen</h1>
<p className="text-normal">Screen Size: 8 Inches</p>
<p className=''>Screen Resolution: 1280 x 800 pixels</p>
<h1 className='text-3xl font-bold my-5'>price: $200</h1>


  <button className="btn btn-md" onClick={decrease}>-</button>  <input type="tel" name="" className="w-10 h-10 border-black" value={number}/> <button className="btn btn-md" onClick={increase
  }>+</button>

 <button className='btn btn-secondary ml-5'>Add to Cart </button> <Link to="/viewCart"><button className='btn'>buy now </button></Link>
 <br/>
 <button className='btn btn-xs'>wishlist</button>
 <button className='btn btn-xs'>compare</button>
 <div class="divider"></div>


<h1 className=''>Availability:In Stock</h1>
<h1>SKU:0040</h1>
<p>Brands:Brand 01, Brand 02</p>
  </div>
 
</div>


{/* the second part will be here write now  */}

<div className='flex flex-col items-center p-10'>

  <h1 className='text-xl font-bold'>Description</h1>
  <p className='w-3/4 my-5 font-serif'>

  A groundbreaking Retina display. Powerful dual-core and quad-core Intel processors. Fast flash storage. High-performance graphics. Great built-in apps. And now in the 13-inch model, a revolutionary new Force Touch trackpad and even longer battery life.1 Whatever you can imagine, MacBook Pro with Retina display gives you the power to create.

The design of MacBook Pro packs a lot of power into not a lot of space. Because we believe that high performance shouldn’t come at the expense of portability. And despite being so compact, the new 13-inch and 15-inch MacBook Pro with Retina display models now deliver up to 10 hours and nine hours of battery life, respectively — an hour more than the previous models.
  </p>
  <p  className='font-bold  my-5'> 12.9” And 11” Liquid Retina Display With Promotion</p>
  <img src='https://i.ibb.co/T8mV9z6/product-detai-electronic.jpg' className="my-4" alt='text '></img>

  <div class="overflow-x-auto">
  <table class="table table-zebra w-3/4">
    <thead>
      <tr>
    
        <th>Type</th> 
        <th>Brand</th> 
        <th>company</th> 
      
      </tr>
    </thead> 
    <tbody>
      <tr>
       
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
       
      </tr>
      <tr>
       
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
       
      </tr>
      <tr>
      
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
      
      </tr>
      <tr>
      
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
       
      </tr>
      <tr>
         
        <td>Yancy Tear</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
       
      </tr>
      <tr>
        
        <td>Irma Vasilik</td> 
        <td>Editor</td> 
        <td>Wiza, Bins and Emard</td> 
       
      </tr>
      <tr>
      
        <td>Meghann Durtnal</td> 
        <td>Staff Accountant IV</td> 
        <td>Schuster-Schimmel</td> 
       
      </tr>
      <tr>
       
        <td>Sammy Seston</td> 
        <td>Accountant I</td> 
        <td>O'Hara, Welch and Keebler</td> 
        
      </tr>
      <tr>
       
        <td>Lesya Tinham</td> 
        <td>Safety Technician IV</td> 
        <td>Turner-Kuhlman</td> 
       
      </tr>
  
     
 
 
     
    </tbody> 
   
  </table>
</div>

<h2 className="text-3xl font-bold">You may also like</h2>
</div>

<FlashSaleSingle />
           </div>
           }
           
           )}
            <Footer></Footer>
        </div>
    );
};

export default ProductDetail;