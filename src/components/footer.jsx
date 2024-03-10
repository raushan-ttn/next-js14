import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#45595B] min-h-[580px] pt-20">
      <div className="cart-container">
        <div className="grid grid-cols-5 border-b pb-8 border-amber-400">
          <div className="text-left col-span-1">
            <h2 className="text-4xl cart-tcolor pb-1">Fruitables</h2>
            <span className="text-[#F3B321]">Fresh products</span>
          </div>
          <div className="relative col-span-3">
            <input
              className="py-4 pl-1 pr-14 rounded-full min-w-[480px]"
              type="text"
            />
            <button className="py-4 rounded-full cart-bg text-white px-4 right-16 absolute">
              Subscribe now
            </button>
          </div>
          <div className="ml-auto py-2 flex col-span-1">
            <span className="border-2 border-[#F3B321] rounded-full p-3 mx-2 text-[#F3B321] block min-w-[50px] hover:bg-[#F3B321] hover:text-gray-300 cursor-pointer">
              t
            </span>
            <span className="border-2 border-[#F3B321] rounded-full p-3 mx-2 text-[#F3B321] block min-w-[50px] hover:bg-[#F3B321] hover:text-gray-300 cursor-pointer">
              f
            </span>
            <span className="border-2 border-[#F3B321] rounded-full p-3 mx-2 text-[#F3B321] block min-w-[50px] hover:bg-[#F3B321] hover:text-gray-300 cursor-pointer">
              Y
            </span>
            <span className="border-2 border-[#F3B321] rounded-full p-3 mx-2 text-[#F3B321] block min-w-[50px] hover:bg-[#F3B321] hover:text-gray-300 cursor-pointer">
              In
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 font-raleway text-left">
          <div>
            <h2 className="text-gray-300 font-semibold text-2xl py-4 ">
              Why People Like us!
            </h2>
            <p className="text-gray-300 pr-3 tracking-wider">
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the like Aldus PageMaker including of Lorem
              Ipsum.
            </p>
            <button className="p-3 border border-orange-300 px-10 rounded-full mt-6 capitalize text-gray-300 hover:bg-[#F3B321] cart-tcolor hover:text-gray-300">
              read more
            </button>
          </div>
          <div>
            <h2 className="text-gray-200 font-semibold text-2xl py-4">
              Shop Info
            </h2>
            <ul>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                About Us
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Terms & Condition
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Return Policy
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                FAQs & Help
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-200 font-semibold text-2xl py-4">
              Account
            </h2>
            <ul>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                My Account
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Shop details
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Shopping Cart
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Wishlist
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Order History
              </li>
              <li className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                International Orders
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-200 font-semibold text-2xl py-4">
              Contact
            </h2>
            <div>
              <p className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                {' '}
                Address: 1429 Netus Rd, NY 48247{' '}
              </p>
              <p className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Email: Example@gmail.com
              </p>
              <p className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Phone: +0123 4567 8910
              </p>
              <p className="text-gray-300 py-1 hover:text-[#F3B321] cursor-pointer">
                Payment Accepted
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-20 text-white">
          <p className="">
            <span>&copy;</span>
            <span className="cart-tcolor">Your Site Name,</span> All right
            reserved.
          </p>
          <p className="ml-auto">
            Designed By <span className="cart-tcolor"> HTML Codex </span>{' '}
            Distributed By <span className="cart-tcolor">ThemeWagon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
