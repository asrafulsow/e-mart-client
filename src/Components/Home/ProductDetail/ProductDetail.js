import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import FlashSaleSingle from '../FlashSale/FlashsaleSingle';
import Ratting from "../Ratting/Ratting"

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState([])
  let { singleProduct } = useParams()



  useEffect(() => {
    axios
      .get(`https://emart-xcpi.onrender.com/products`)
      .then((res) => setProducts(res.data));
  }, []);


  useEffect(() => {
    const mahee = products.filter(x => x?._id === singleProduct);
    setDetail(mahee)
    console.log(detail, 'this is from ami ')
  }, [singleProduct, products]);

  // increass and decress area button
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrease = () => {
    setQuantity(quantity - 1)
  }
  return (
    <div>
      {detail && detail.map(data => {
        return <div>

          {/* the upper side  */}

          <div class="flex flex-row">
            <div class="basis-1/2 p-10">

              <img src={data?.image} alt='hello '></img>
            </div>
            <div class="basis-1/2 p-10 md:mt-14">

              <h1 className="font-bold uppercase">{data.category} </h1>
              <h1 className="text-4xl font-bold my-4" >{data.name}</h1>
              <p className="text-normal">{data.description.slice(0, 200)}</p>
              <Ratting className="mt-5" rat={data.rating}></Ratting>
              <h1 className='text-3xl font-bold my-5'>Price: ${data.price}</h1>

              {/* handle incress and decress area */}

              <button onClick={handleDecrease} className="px-4 py-2 border rounded-l-2xl border-gray-600">
                -
              </button>
              <input
                type="number"
                value={quantity}
                className="w-12 text-center py-2 border-r border border-gray-600"
                maxLength={5}
              />
              <button onClick={handleIncrease} className="px-4 py-2 border rounded-r-2xl  border-gray-600">
                +
              </button>

              <button className='btn bg-primary-all ml-5 mr-4'>Add to Cart </button>
              <Link to="/checkout"><button className='btn'>buy now </button></Link>
              <br />

              <div class="divider mt-5"></div>


              <h1 className=''>Availability:In Stock</h1>
              <h1>SKU:0040</h1>
              <p>Brands:Brand 01, Brand 02</p>
            </div>

          </div>


          {/* the second part will be here write now  */}

          <div className='flex flex-col items-center p-10'>

            <h1 className='text-xl font-bold'>Description</h1>
            <p className='w-3/4 my-5 font-serif'>

              {data.description}

            </p>
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