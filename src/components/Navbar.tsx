import nishantPdf from '../../public/nishantgaharwar.pdf'
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center h-20 py-[25px] px-5 sm:px-10 text-primary_white font-PoppinsRegular">
        <span className=" text-base sm:text-xl font-PoppinsBold"><a href="/">Nishant Gaharwar</a></span>
        <ul className="flex justify-around gap-4 items-center">
            <li className="hidden sm:block "><a href="https://github.com/iamnishantgaharwar" target="_blank">Github</a></li>
            <li className="hidden sm:block "><a href="https://www.linkedin.com/in/iamnishantgaharwar/" target="_blank">LinkedIn</a></li>
            <li className=" bg-primary_white text-secondary_black rounded px-4 py-2"><a href={nishantPdf} download>Resume</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar