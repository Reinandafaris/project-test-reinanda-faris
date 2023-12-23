import { useRef } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
const Header = () => {
  const headerRef = useRef(null);
  return (
    <section>
      <Headroom
      onPin={() => {document.querySelector('header').style.opacity = '0.5';}}
      onUnfix={() => {headerRef.current.style.opacity = '1';}}>
        <header
        ref={headerRef}
        className="flex justify-between bg-blue-500 text-white p-4 px-20">
          <Link to="/">
            <h2 className="text-2xl font-bold">Reinanda Faris</h2>
          </Link>
          <div className='flex gap-3'>
            <Link to="/work" className='hover:underline hover:text-white'>
              <p>Work</p>
            </Link>
            <Link to="/about" className='hover:underline hover:text-white'>
              <p>About</p>
            </Link>
            <Link to="/services" className='hover:underline hover:text-white'>
              <p>Services</p>
            </Link>
            <Link to="/" className='hover:underline hover:text-white'>
              <p>Ideas</p>
            </Link>
            <Link to="/careers" className='hover:underline hover:text-white'>
              <p>Careers</p>
            </Link>
            <Link to="/contact" className='hover:underline hover:text-white'>
              <p>Contact</p>
            </Link>
          </div>
        </header>
      </Headroom>
    </section>
  );
};

export default Header;
