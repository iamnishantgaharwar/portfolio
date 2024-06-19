import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



export const MenuItem = () => {

  return (
    <>
    <motion.li
        className="item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      >
      <a href="https://github.com/iamnishantgaharwar" target="_blank" className=" font-PoppinsBlack text-7xl sm:text-9xl">GitHub</a>
    </motion.li>
        <motion.li
        className="item"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        >
        <a href="https://www.linkedin.com/in/iamnishantgaharwar/" target="_blank" className=" font-PoppinsBlack text-7xl sm:text-9xl">LinkedIn</a>
      </motion.li>
      <motion.li
      className="item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href="/nishantgaharwar.pdf" download className=" font-PoppinsBlack text-7xl sm:text-9xl">Resume</a>
    </motion.li>
    </>
  );
};
