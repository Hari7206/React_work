import React from 'react';

function About() {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 py-12">

      <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg mb-6">
            We build simple, powerful, and user-friendly digital solutions that actually make sense.
          </p>

          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-green-400 hover:opacity-90 transition">
            Learn More
          </button>
        </div>

        <img
          src="https://i.pinimg.com/1200x/17/0c/2e/170c2e2b547dfd441f390117091392d3.jpg"
          alt="about"
          className="w-full md:w-[400px] rounded-xl shadow-md"
        />
      </section>

    
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Our mission is to deliver high-quality digital experiences that are clean, efficient, and scalable.
          We believe in simplicity, performance, and creating things that people actually enjoy using.
        </p>
      </section>

 
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Values</h2>

        <div className="flex flex-wrap justify-center gap-6">
          
          <div className="bg-white shadow-md rounded-xl p-6 w-64 border-t-4 border-green-500 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly explore new ideas and technologies.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 w-64 border-t-4 border-green-500 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We focus on clean, efficient, and reliable solutions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 w-64 border-t-4 border-green-500 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-600">
              We believe in continuous learning and improvement.
            </p>
          </div>

        </div>
      </section>

  
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Team</h2>

        <div className="flex flex-wrap justify-center gap-6">

          <div className="bg-white shadow-md rounded-xl p-5 w-56 hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/87/85/d6/8785d6fdf794401562cfeb3b0e1ad769.jpg"
              alt="team"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-500 text-sm">Frontend Developer</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-56 hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/9d/c2/c5/9dc2c550bd745818e0d2ab12aa14858b.jpg"
              alt="team"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-gray-500 text-sm">Backend Developer</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-56 hover:shadow-lg transition">
            <img
              src="https://i.pinimg.com/736x/75/72/b2/7572b27c5e20f16a8be5b553ca1792f8.jpg"
              alt="team"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h4 className="font-semibold">Alex Lee</h4>
            <p className="text-gray-500 text-sm">UI/UX Designer</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;