import mailImg from '../assets/images/mail.png'

const Contact = () => {
  return (
    <section className="mt-40 flex justify-center">
        <div className="w-full sm:w-3/6 mx-5 sm:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-PoppinsBold text-primary_white">
                Contact
            </h1>
            <div className='w-10 mt-10 flex items-center'>
                <img src={mailImg} alt="Mail" />
                <div>
                    <p className="ml-5 text-lg font-PoppinsBold text-primary_white">Email hello@nishantgaharwar.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact