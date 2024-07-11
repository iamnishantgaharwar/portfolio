import { CircleX } from 'lucide-react';
import { useState } from 'react'; // Import useState if not already imported
import { Link } from 'react-router-dom';

const Update = () => {
  const [showUpdate, setShowUpdate] = useState(true);

  const handleClose = () => {
    setShowUpdate(false);
  };

  return (
    <>
      {showUpdate && (
        <section className="flex justify-center bg-primary_white relative">
          <button
            className="absolute top-0 right-1 focus:outline-none"
            onClick={handleClose}
          >
            <CircleX />
          </button>
          <div className="text-secondary_black font-PoppinsSemiBoldItalic">
            Working on site design. Check out <span className="underline"><Link to={"/blogs"}>blogs</Link></span>.
          </div>
        </section>
      )}
    </>
  );
}

export default Update;
