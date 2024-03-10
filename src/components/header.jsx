import Link from "next/link";
const Header = () => {
  return (
    <>
    <div className="cart-container cart-bg rounded-tl-full rounded-tr-[250rem] rounded-br-full rounded-bl-[250rem] text-white text-sm font-openSans tracking-wider font-thin">
      <div className="header-top flex px-6">
        <div className="p-4">
          <span className="pr-3">123 street, New York</span>
          <span className="pr-3">Email@Example.com</span>
        </div>
        <div className="ml-auto">
          <ul className="flex">
            <li className="py-4 px-1">Privacy Policy</li>
            <li className="py-4 px-1">/</li>
            <li className="py-4 px-1">Terms of use</li>
            <li className="py-4 px-1">/</li>
            <li className="py-4 px-1">Sales and Refunds</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="cart-container flex py-8">
      <h2 className="text-4xl cart-tcolor font-extrabold">Fruitables</h2>
      <div className="ml-auto pt-2">
        <nav className="flex align-middle">
          <Link href="#" className="px-4 text-gray-600 hover:text-[#81c409]">Home</Link>
          <Link href="#" className="px-4 text-gray-600 hover:text-[#81c409]">Shop</Link>
          <Link href="#" className="align-middle px-4 text-gray-600 hover:text-[#81c409]">Contact</Link>
        </nav>
      </div>
      <div className="ml-auto pt-2">
        <ul className="flex align-middle">
          <li className="px-4 hover:text-[#81c409]"><span>search</span></li>
          <li className="px-4 hover:text-[#81c409]"><span>Cart</span></li>
          <li className="px-4 hover:text-[#81c409]"><Link href="#">User</Link></li>
        </ul>
      </div>
  </div>
</>
  );
};

export default Header;
