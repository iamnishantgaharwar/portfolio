import { useState, memo } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import github from '../assets/images/github.png';
import linkedIn from '../assets/images/linkedin.png';

const Footer = memo(() => {
  const [contentVisible, setContentVisible] = useState(false);

  const loadContent = () => {
    setContentVisible(true);
  };

  const footerRef = useIntersectionObserver(loadContent, { threshold: 0.1 });

  return (
    <footer ref={footerRef} className="flex justify-center mt-40 font-PoppinsBold bg-primary_white text-secondary_black">
      {contentVisible ? (
        <div className="w-full mx-5 sm:w-4/6 lg:w-3/6 h-40 flex justify-between items-center">
          <p className="text-xl"><a href="/">Nishant Gaharwar</a></p>
          <ul className='flex '>
            <li className='w-8 mx-2 hover:-translate-y-1 transition-all'>
              <a href="https://github.com/iamnishantgaharwar" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="Github" loading='lazy' />
              </a>
            </li>
            <li className='w-8 mx-2 hover:-translate-y-1 transition-all'>
              <a href="https://www.linkedin.com/in/iamnishantgaharwar/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="LinkedIn" loading='lazy' />
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-full mx-5 sm:w-4/6 lg:w-3/6 h-40 flex justify-center items-center">
          Loading...
        </div>
      )}
    </footer>
  );
});

export default Footer;
