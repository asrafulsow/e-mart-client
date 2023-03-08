import React, { useRef } from 'react';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'

const product = {
    title: "Women’s 3-in-1 Winter Ski Jacket Outdoor",
    images: ["https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-19.jpg", "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-5.jpg", "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-4.jpg", "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-18.jpg", "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-67.jpg"],
    description: "Screen Size: 8 Inches Screen Resolution: 1280 x 800 pixels",
    price: 400,
    stock: true
}


const QuickView = (props) => {
    const [mainimage, setMainimage] = useState(product.images[0])
    const [quantity, setQuantity] = useState(1);

    const { view, setView } = props;
    return (
        <div className={`fixed w-full h-[100vh] top-0 left-0 ${view ? 'block' : 'hidden'} z-10`} style={{ backgroundColor: "rgba(63, 60, 61, 0.6)" }}>
            <div className="flex w-[100vw] h-[100vh] justify-center items-center">
                <div className="box flex bg-white p-5 w-[60vw] rounded-lg">
                    <div className="image-container flex flex-col w-[50%]">
                        <img src={mainimage} alt="product" className='h-[70vh] border mb-2' />
                        <div className="thumbs flex flex-row overflow-x-auto">
                            {
                                product.images.map((image) => {
                                    return <img key={image} src={image} alt="" className="h-[50px] border mr-2 hover:border-2 hover:border-black transition duration-300" onClick={() => setMainimage(image)} />
                                })
                            }
                        </div>
                    </div>
                    <div className="info-container text-right pl-[35px] w-[50%]">
                        <div className="cursor-pointer" onClick={() => setView(false)}><AiFillCloseCircle className='ml-auto' /></div>
                        <div className="info text-left">
                            <p>add your review</p>
                            <h2 className='text-[30px] font-bold mb-4'>{product.title}</h2>
                            <p>{product.description}</p>
                            <p className='font-semibold text-[30px]'>${product.price}</p>
                            <div className="cartoptions flex flex-row justify-between">
                                <div className="quanity flex flex-row">
                                    <button disabled={quantity === 1 ? true : false} onClick={() => setQuantity(quantity - 1)} className="p-3 border">-</button>
                                    <div className='p-3 px-6 font-bold border-2 border-black'>{quantity}</div>
                                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 border">+</button>
                                </div>
                                <button className='bg-black p-3 text-white rounded-lg hover:bg-white hover:text-black hover:border-2 border-2 transition-all ease-in-out duration-400'>Add to Cart </button>
                            </div>
                            <p className='mt-4'>Availibility: {product.stock ? <span className='text-green-500'>In Stock</span> : <span className='text-red-500'>Out of Stock</span>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickView;