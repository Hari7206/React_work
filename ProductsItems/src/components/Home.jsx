import React from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
     const navigate = useNavigate();

  return (
    <div className="px-10 py-6">


      <div className="bg-gradient-to-r from-[#0FB88F] to-[#0B8065] rounded-3xl p-10 text-white flex items-center justify-between">
        
        <div>
          <h1 className="text-5xl font-bold mb-4">New Collection</h1>
          <p className="text-lg mb-6">Upgrade your style with our latest drops.</p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition" onClick={() => navigate("/product")}>
            Shop Now
          </button>
        </div>

        <div className="w-[300px] h-[300px] bg-white/20 rounded-2xl backdrop-blur-md flex items-center justify-center">
          <img src="https://i.pinimg.com/1200x/13/ba/42/13ba425a55b83b02563cc5b8b06260a1.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>

      </div>


      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Trending Products</h2>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
            <div className="h-[500px] bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <img src="https://i.pinimg.com/1200x/4b/33/ae/4b33ae6fc76d15bf909f38268f6f5ec5.jpg" alt="" className="h-full w-full object-cover rounded-xl" />
            </div>
            <h3 className="font-semibold text-lg">T-Shirt</h3>
            <p className="text-gray-500">₹999</p>
          </div>


          <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
            <div className="h-[500px] bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <img src="https://i.pinimg.com/1200x/85/e9/2e/85e92e682784286546d6b60996cc17ed.jpg" alt="" className="h-full w-full object-cover rounded-xl" />
            </div>
            <h3 className="font-semibold text-lg">Shirt</h3>
            <p className="text-gray-500">₹1499</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
            <div className="h-[500px] bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <img src="https://i.pinimg.com/736x/ca/9d/c2/ca9dc2f9b4e7cdd326abb06cc1332f1b.jpg" alt="" className="h-full w-full object-cover rounded-xl" />
            </div>
            <h3 className="font-semibold text-lg">Hoodie</h3>
            <p className="text-gray-500">₹1999</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition">
            <div className="h-[500px] bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
              <img src="https://i.pinimg.com/1200x/2a/6b/82/2a6b822478423bd6554281fd8504707b.jpg" alt="" className="h-full w-full object-cover rounded-xl" />
            </div>
            <h3 className="font-semibold text-lg">Jacket</h3>
            <p className="text-gray-500">₹2499</p>
          </div>

        </div>
      </div>


      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>

        <div className="grid grid-cols-3 gap-6">

          <div className="h-[700px] bg-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold">
           <img src="https://i.pinimg.com/1200x/89/a9/f9/89a9f99fc4580317a19f181ee494dd74.jpg" alt="" className="h-full w-full object-cover rounded-xl object-center" />
          </div>

          <div className="h-[700px] bg-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold ">
           <img src="https://i.pinimg.com/736x/d7/68/87/d76887336f262566d2013c9b31983f91.jpg" alt="" className="h-full w-full object-fit rounded-xl object-center" />
          </div>

          <div className="h-[700px] bg-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold">
           <img src="https://i.pinimg.com/1200x/8a/e8/ea/8ae8ea5faef398bd8014c179f2347c1c.jpg" alt="" className="h-full w-full object-cover rounded-xl object-center" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home