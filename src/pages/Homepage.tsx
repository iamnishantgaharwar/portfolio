import { Suspense } from 'react';
import Hero from '../components/Hero';
import Meetups from '../components/Meetups';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Lenis from 'lenis';

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
