import nishantImage from '../assets/images/nishant.webp';
import '../index.css'; // Import your custom CSS file for styles and animations

const Hero = () => {
	return (
		<section className="h-[500px] mt-20 sm:mt-0 sm:h-full flex justify-center items-center text-primary_white">
			<div className="flex w-full sm:w-4/6 justify-center items-center  flex-col sm:flex-row">
				<div className="sm:mr-20 order-2 sm:order-[0]">
					<h1 className="mt-5 sm:mt-0 text-5xl text-center sm:text-left sm:text-4xl md:text-6xl font-PoppinsBold mb-5 ">
						Front-End React
						<br /> Developer
					</h1>
					<p className="text-base text-center sm:text-left sm:text-lg font-PoppinsRegular mb-10 text-customGray">
					Hey there, I'm Nishant Gaharwar, an enthusiastic React Front-end
						<br />
						Developer hailing from Ahmedabad, India.
					</p>
					<div className="text-center sm:text-left font-PoppinsBold">
						<span>Tech Stack:</span>
						<ul className='flex justify-center sm:flex-col mt-5 mx-5 sm:mx-0'>
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
