// components/Breadcrumb.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Breadcrumb = (params) => {
  const router = usePathname();
  const pathnames = router.split('/').filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className='inline-block'>
      <ol className="breadcrumb flex text-gray-200">
        <li className="breadcrumb-item ">
          <Link href="/" className='cart-tcolor '>
            Home 
          </Link>
          <span className='px-3'> / </span>
        </li>
        {pathnames?.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={index}
              className={`capitalize breadcrumb-item ${isLast ? 'active' : ''}`}
            >
              {isLast ? pathname : <Link className='capitalize' href={routeTo}>{pathname}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
