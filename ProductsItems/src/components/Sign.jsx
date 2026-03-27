import React from 'react';

function Sign() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5">

    
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

  
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

        
          <div className="text-right text-sm text-green-600 cursor-pointer hover:underline">
            Forgot password?
          </div>


          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-green-400 hover:opacity-90 transition"
          >
            Sign In
          </button>

        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full border py-2 rounded-lg hover:bg-gray-50 transition">
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-green-600 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Sign;