import { InnerBanner } from '@/components/inner-banner';
import Link from 'next/link';

const LoginPage = ({ breadcrumbs }) => {
  let content = {
    title: 'Shops Login',
  };
  return (
    <>
      <InnerBanner data={content} />
      <div className="cart-container">
        <div className="">
          <p className="text-lg pt-20 pb-5">Have an account?</p>
          <p className="text-3xl py-3">Login</p>
        </div>
        <div className="m-auto text-center max-w-[400px]">
          <form className="flex flex-col pb-10">
            <input className="border border-gray-300 py-3 pl-3 rounded-full my-3" type="text"  placeholder='Enter your username'/>
            <input className="border border-gray-300 py-3 pl-3 rounded-full my-3" type="password" placeholder='Enter your password' />
            <button type="submit" className="p-3 border border-orange-300 px-10 rounded-full mt-6 capitalize text-gray-300 hover:bg-[#F3B321] cart-tcolor hover:text-gray-300 m-auto w-[150px]"> login </button>
          </form>
          <p className="pb-10">
            <Link className="text-gray-600 hover:text-[#F3B321]" href="/forgot/password">forgot Password</Link>
          </p>
          <div className="pb-10">
            <p className="text-gray-600 pb-10">New user?</p>
            <Link className="p-3 border border-orange-300 px-10 rounded-full mt-6 capitalize text-gray-300 hover:bg-[#F3B321] cart-tcolor hover:text-gray-300 m-auto w-[150px]" href="/register">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
