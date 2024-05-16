import SplitType from 'split-type';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import '../App.css';

const Loader = () => {
	useEffect(() => {
        const text = new SplitType('#loader-text');
		gsap.to(text.chars, {
			y: 0,
			duration: 0.1,
			delay: 0.2,
			stagger: 0.05,
		});
	}, []);

	return (
		<div className=" h-full flex justify-center items-center font-PoppinsBlack text-primary_white">
			<h1 id="loader-text" className="text-4xl sm:text-6xl lg:text-8xl">
				Nishant Gaharwar
			</h1>
		</div>
	);
};

export default Loader;
