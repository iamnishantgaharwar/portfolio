import { Suspense, lazy, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy-loaded components
const Meetups = lazy(() => import('../components/Meetups'));
const Footer = lazy(() => import('../components/Footer'));
const Contact = lazy(() => import('../components/Contact'));

const Homepage = () => {
	return (
		<div className="h-screen">
			<Navbar />
			<Hero />
			<Suspense fallback={<div>Loading...</div>}>
				<Meetups />
				<Contact />
				<Footer />
			</Suspense>
		</div>
	);
};

export default Homepage;
