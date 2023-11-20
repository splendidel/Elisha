import React from 'react';

//Link 
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
  <div className='container mx-auto'>
    <div className='flex justify-between items-center lg:mx-28'>
      {/* logo */}
      <Link to='about' className='font-bold text-gradient lg:h3'>E.M</Link>
      {/* button */}
      <Link to='contact'>
        <button className='btn btn-sm'>Work with me</button>
      </Link>
    </div>
  </div>
  </header>;
};

export default Header;
