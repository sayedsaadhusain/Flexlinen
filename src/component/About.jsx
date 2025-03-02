import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* About Section */}
      <div className="flex flex-col md:flex-row py-12 px-6 md:px-16 gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">About Flexlinen Sportswear Brand</h1>
          <p className="text-gray-700 mb-6">
            At Flexlinen, we create high-quality activewear designed for performance and style. Our modern e-commerce platform showcases our commitment to excellence and customer satisfaction.
          </p>
          <button className="bg-white text-black border border-black rounded-full px-8 py-2 w-24 hover:bg-gray-100">
            Shop
          </button>
        </div>
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="src/assets/about1.png" 
              alt="Flexlinen store display" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Commitment Section */}
      <div className="flex flex-col md:flex-row py-12 px-6 md:px-16 gap-8 bg-gray-50">
        <div className="flex-1 relative">
          <div className="absolute -top-8 left-4 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="src/assets/about2.png" 
              alt="Person wearing activewear" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-8 w-36 h-36 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="src/assets/about3.png" 
              alt="Sportswear shoes" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center mt-48 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
          <p className="text-gray-700">
            We prioritize clean design and easy navigation, ensuring a seamless shopping experience that reflects our dedication to quality in the sportswear market.
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery Showcase</h2>
        <p className="text-gray-600 text-center mb-8">
          Explore our high-quality activewear through stunning visual presentations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gallery Images - Row 1 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about4.png" alt="Colorful sportswear" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about5.png" alt="Sportswear collection" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about6.png" alt="Performance fabric detail" className="w-full h-full object-cover" />
          </div>
          
          {/* Gallery Images - Row 2 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about7.png" alt="Store display" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about8.png" alt="Crowded store" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src="src/assets/about9.png" alt="Footwear" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gray-900 text-white py-12 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" className="mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mb-4">Flexlinen's activewear is top-notch! The quality and fit exceeded my expectations, and I'd recommend this brand.</p>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-2"></div>
              <p className="font-semibold">Jordan Lee</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" className="mr-1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mb-4">I love my Flexlinen gear! Stylish, comfortable, and perfect for my workouts. Truly a game-changer!</p>
            <div className="flex items-center justify-center md:justify-start">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2"></div>
              <p className="font-semibold">Emily Chen</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-4">Shop</h3>
            <p className="text-sm text-gray-300 mb-2">Explore our high-quality activewear collection today</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-4">CONNECT</h3>
            <a href="mailto:flexlinen2024@gmail.com" className="text-sm text-gray-300 hover:text-white">flexlinen2024@gmail.com</a>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <div className="flex flex-col">
              <input type="email" placeholder="Your email for updates" className="py-2 px-4 mb-2 rounded text-black text-sm" />
              <button className="bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700">
                Subscribe for exclusive offers
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          © 2024. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;