import React, { useContext } from 'react'
import { ProductContext } from '../context/AppContext'
import { Link } from "react-router-dom";

function Product() {
    const { products, loading } = useContext(ProductContext)

    if (loading == true) {
        return <div className="flex items-center justify-center h-screen">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    }
    return (
        <div className='h-screen w-full'>
            <div className=' h-[500px] w-full bg-cover bg-center bg-[#CED8E2] relative'>
                <img src="https://i.pinimg.com/736x/ab/d4/19/abd4192bf1fc3b15dd9f0e0b6bcd7875.jpg" alt="" className=' object-cover h-[100%] absolute right-0' />
                <h1 className='text-[5rem] uppercase font-bold w-1 pl-10'>
                    REFLECT
                    FASHION
                </h1>
                <p className='w-[40%] ml-10 text-[1.1rem]'>
                    Explore our latest clothing collection designed for comfort and style. From casual essentials to standout pieces, each item is crafted with quality and modern trends in mind. Elevate your everyday look effortlessly and express your style with confidence through outfits that feel as good as they look.
                </p>
            </div>
            <div className='flex justify-around h-full flex-wrap w-[100%]'>
                {products.map((elem) => (
                    <Link to={`/product/${elem.id}`} key={elem.id}>
                        <div className='p-5 rounded-[10px] h-[500px] w-[400px]'>
                            <img src={elem.image} alt="" className='h-[400px] w-[100%] rounded-[10px]' />
                            <div>
                                <h1 className='text-[1.2rem] font-bold'>{elem.title}</h1>
                                <h4>{elem.price}</h4>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Product