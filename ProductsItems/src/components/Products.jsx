import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { ProductContext } from '../context/AppContext';

function Products() {
    const { id } = useParams();
    const { products  , loading} = useContext(ProductContext)

    const product = products.find((item) => item.id == id)
  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
    return (
        <div className=' w-full h-800px mt-28'>

            <div className='flex w-full h-full gap-4 p-2'>
              <div className="w-[40%] h-[700px] flex items-center justify-center">
  <img
    src={product.image}
    alt=""
    className="max-h-full max-w-full object-contain"
  />
</div>
                <div className='w-[60%] h-[700px] flex flex-col gap-10 p-5 py-10'>
                    <div className='flex flex-col gap-6 items-start'>
                        <p className='p-2 px-6 bg-red-500 text-white rounded-lg'>Sale</p>
                        <h1 className='font-bold capitalize text-[2.1rem]'>{product.title}</h1>
                        <p className='font-bold capitalize text-[1.1rem]'> ${product.price}</p>
                        <p className='text-[1.2rem]'>{product.category}</p>
                    </div>
                    <div className='border-y border-gray-300 py-10 px-5 flex justify-between items-center'>
                        <span className='flex gap-2'>
                            <button className='p-3 px-7 bg-[#4C8EFF] text-white rounded-[50px] text-[1.1rem]'>Buy Now</button>
                            <button className='p-3 px-7 border rounded-[50px]  border-gray-300 text-[1.1rem] font-bold '><i className="ri-shopping-cart-fill  text-gray-400"></i> Add to Cart</button>
                        </span>
                        <i className="ri-heart-fill bg-red-500 p-2 text-white text-[1.1rem] rounded-[50%] px-3"></i>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span>
                            <h4 className='font-bold text-[1.2rem] '>Product Description</h4>
                            <p className='text-[1.6rem]'>{product.description}</p>
                        </span>
                        <div className='flex gap-5 items-center '>
                            <h4 className='text-[1.6rem]'><i className="ri-star-fill text-yellow-400"></i> </h4><p className='text-gray-400 text-[1.3rem]'>{product.rating.rate}</p>
                            <p className='text-[1.1rem] font-bold'>
                                (${product.rating.count}) New Reviews </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products