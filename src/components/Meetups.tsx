import React, { lazy, Suspense, useEffect, useState } from 'react';
const LazyImage = lazy(() => import('./LazyImage'));

const Meetups: React.FC = () => {
	const [isSmallScreen, setIsSmallScreen] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const updateWindowSize = () => {
		setIsSmallScreen({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	const debounce = (func: any, delay: any) => {
		let timeoutId;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

	useEffect(() => {
		const debouncedUpdateWindowSize = debounce(updateWindowSize, 250);
		window.addEventListener('resize', debouncedUpdateWindowSize);
		return () => {
			window.removeEventListener('resize', debouncedUpdateWindowSize);
		};
	}, [isSmallScreen]);

	return (
		<section className="mt-40 sm:mt-0">
			<div className="flex justify-center mb-20">
				<h1 className="text-3xl sm:text-4xl md:text-6xl font-PoppinsBlack text-primary_white">
					Community Meetups
				</h1>
			</div>
				<main className="flex justify-center h-full mx-5 sm:mx-0 sm:h-[750px]">
					<div className="sm:w-4/6 lg:w-3/6 flex flex-col sm:grid sm:grid-cols-5 sm:grid-rows-6 gap-2 sm:gap-5">
						<Suspense fallback={<div>Loading...</div>}>
							<div className='sm:col-span-2 sm:row-span-2'>
								<LazyImage
									className=" object-cover h-full  rounded "
									src="wp-loyalty-img1"
								/>
							</div>
							<div className='sm:col-span-3 sm:row-span-2 '>
								<LazyImage
									className=" object-cover h-full  rounded"
									src="rtcampimg1"
								/>
							</div>
							<div className='sm:col-span-3 sm:row-span-2' >
								<LazyImage
									className=" object-cover h-full  rounded "
									src="wp2"
								/>
							</div>
							<div className='sm:col-span-2 sm:row-span-2'>
								<LazyImage
									className=" object-cover h-full  rounded "
									src="wp1"
								/>
							</div>
							<div className='sm:col-span-2 sm:row-span-2'>
								<LazyImage
									className=" object-cover h-full  rounded "
									src="wp3"
								/>
							</div>
							<div className='sm:col-span-3 sm:row-span-2 '>
								<LazyImage
									className=" object-cover h-full rounded "
									src="rtcampimg2"
								/>
							</div>
						</Suspense>
					</div>
				</main>
		</section>
	);
};

export default Meetups;
