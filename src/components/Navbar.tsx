
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center h-20 py-[25px] px-5 sm:px-10 text-primary_white font-PoppinsBold">
        <span className=" text-base sm:text-xl"><a href="/">Nishant Gaharwar</a></span>
        <ul className="flex justify-around">
            <li className="hidden sm:block px-4"><a href="https://github.com/iamnishantgaharwar" target="_blank">Github</a></li>
            <li className="hidden sm:block px-4"><a href="https://www.linkedin.com/in/iamnishantgaharwar/" target="_blank">LinkedIn</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar