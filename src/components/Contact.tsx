import { useState, memo } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import mailImg from '../assets/images/mail.png';

const Contact = memo(() => {
  const [contentVisible, setContentVisible] = useState(false);

  const loadContent = () => {
    setContentVisible(true);
  };

  const contactRef = useIntersectionObserver(loadContent, { threshold: 0.1 });

  return (
    <section ref={contactRef} className="mt-40 flex justify-center">
      {contentVisible ? (
        <div className="w-full sm:w-4/6 lg:w-3/6 mx-4 sm:mx-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-PoppinsBold text-primary_white">
            Contact
          </h1>
          <div className='w-10 mt-4 flex items-center'>
            <img src={mailImg} alt="Mail" />
            <div>
              <p className="ml-4 text-lg font-PoppinsBold text-primary_white">Email iamnishantgaharwar@gmail.com</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full sm:w-4/6 lg:w-3/6 mx-4 sm:mx-0">
          <h1 className="text-lg sm:text-xl md:text-2xl font-PoppinsBold text-primary_white">
            Loading...
          </h1>
        </div>
      )}
    </section>
  );
});

export default Contact;
