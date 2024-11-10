
import nishantImage from '../assets/images/nishant.webp';
import '../index.css'; // Import your custom CSS file for styles and animations

const Hero = () => {
	return (
		<section className="min-h-screen flex justify-center text-primary_white">
			<div className="w-full flex flex-col md:flex-row justify-start mt-10 md:mt-0 md:justify-center items-center mx-2 sm:mx-4">
				<div className="md:mr-20 order-2 md:order-[0]">
					<h1 className="mt-5 md:mt-0  text-center md:text-left hero-font font-PoppinsBold mb-4 ">
						Front-End React
						<br /> Developer
					</h1>
					<p className="text-base text-center md:text-left font-PoppinsRegular mb-4 text-customGrayText break-words">
					Hey there, I'm Nishant Gaharwar, an enthusiastic React Front-end
						<br />
						Developer hailing from Ahmedabad, India.
					</p>
					<div className="text-center md:text-left font-PoppinsSemiBold">
						<span >Tech Stack:</span>
						<ul className='flex justify-center md:flex-col mt-4 mx-5 sm:mx-0'>
							<li><img className='my-1' src="https://skillicons.dev/icons?i=html,css,tailwind,js,php" alt="skill-icon" /></li>
							<li><img className='my-1' src="https://skillicons.dev/icons?i=react,nodejs,express,postgres" alt="skill-icon" /></li>
							<li><img className='my-1' src="https://skillicons.dev/icons?i=prisma,mysql,git" alt="skill-icon" /></li>
							<li></li>
						</ul>
					</div>
				</div>
				<div className="image-container">
					<img
						src={nishantImage}
						alt="Nishant Gaharwar"
						className="hero-image"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
