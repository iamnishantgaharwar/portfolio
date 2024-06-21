import { Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// lazy load the Meetups component
const Meetups = lazy(() => import('../components/Meetups'));
const Footer = lazy(() => import('../components/Footer'));
const Contact = lazy(() => import('../components/Contact'));

// Initialize Lenis for smooth scrolling
const lenis = new Lenis();
function raf(time: any) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const Homepage = () => {
	return (
		<>
			<div className="h-screen">
				<Navbar />
				<Hero />
				<Suspense fallback={<div>Loading...</div>}>
					<Meetups />
				</Suspense>
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
