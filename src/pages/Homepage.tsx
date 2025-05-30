import { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Meetups from '../components/Meetups';
import Navbar from '../components/Navbar';

// Lazy-loaded components
// const Meetups = lazy(() => import('../components/Meetups'));
const Footer = lazy(() => import('../components/Footer'));
const Contact = lazy(() => import('../components/Contact'));

const Homepage = () => {
	return (
		<div className="h-screen">
			<Navbar />
			<Hero />
				<Meetups />
			<Suspense fallback={<div>Loading...</div>}>
				<Contact />
				<Footer />
			</Suspense>
		</div>
	);
};

export default Homepage;
