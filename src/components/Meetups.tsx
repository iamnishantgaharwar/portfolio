// Meetups.tsx
import React from 'react';
import wpLoyaltyimg1 from '../assets/images/wp-loyalty-img1.png';
import wp2 from '../assets/images/wp2.webp';
import wp1 from '../assets/images/wp1.jpg';
import wp3 from '../assets/images/wp3.webp';
import rtcampimg1 from '../assets/images/rtcampimg1.webp';
import rtcampimg2 from '../assets/images/rtcampimg2.webp';

const Meetups: React.FC = () => (
	<section>
		<div className="flex justify-center mb-20">
			<h1 className="text-3xl sm:text-4xl md:text-6xl font-PoppinsBlack text-primary_white">
				Community Meetups
			</h1>
		</div>
		<main className="flex justify-center h-full mx-5 sm:mx-0 sm:h-[750px]">
			<div className="sm:w-4/6 lg:w-3/6 flex flex-col sm:grid sm:grid-cols-5 sm:grid-rows-6 gap-4 sm:gap-5">
				<div className="sm:col-span-2 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={wpLoyaltyimg1}
						alt="Meetup 1"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
				<div className="sm:col-span-3 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={rtcampimg1}
						alt="Meetup 2"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
				<div className="sm:col-span-3 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={wp2}
						alt="Meetup 3"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
				<div className="sm:col-span-2 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={wp1}
						alt="Meetup 4"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
				<div className="sm:col-span-2 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={wp3}
						alt="Meetup 5"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
				<div className="sm:col-span-3 sm:row-span-2">
					<img
						className="object-cover h-full rounded"
						src={rtcampimg2}
						alt="Meetup 6"
						width={'100%'}
						height={'100%'}
						loading='lazy'
					/>
				</div>
			</div>
		</main>
	</section>
);

export default Meetups;
