import Card from '../components/Card';

const Blogs = () => {
	return (
			<main className="min-h-full text-primary_white flex-col">
				<h5 className=" mt-[30px] text-[2.618rem] font-PoppinsSemiBold text-primary_white flex flex-1 justify-center">
					Blogs
				</h5>
				{/* Card Component */}
				<div className=" my-16 flex flex-col sm:flex-row items-center gap-5 sm:justify-center sm:gap-[75px] sm:flex-wrap">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="flex justify-center">
					<button className="w-[10rem] h-[3.125rem] bg-primary_white text-secondary_black font-PoppinsBold text-[1.25rem] rounded-bl-[0.625rem] rounded-tr-[0.625rem]">
						load more
					</button>
				</div>
        <footer className='mt-24 sm:mt-0 lg:mt-24'>
				<h1 className="mx-5 font-PoppinsBlack text-customGray text-[2.813rem] sm:text-[6.125rem] lg:text-[8rem] xl:text-[8.875rem] flex justify-center">
					blogs.nishant
				</h1>
			</footer>
			</main>
	);
};

export default Blogs;
