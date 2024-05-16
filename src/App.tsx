import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Lenis from 'lenis';
import Loader from './pages/Loader';
const lenis = new Lenis();

function raf(time: any) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const Homepage = lazy(() => import('./pages/Homepage'));

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate data loading or any async operations
		setTimeout(() => {
			setLoading(false); // Turn off loader after a delay (simulating loading completion)
		}, 3000); // Change the delay as needed
	}, []); // Run once on component mount

	return (
		<div className="h-screen">
			{loading ? (
				<Loader />
			) : (
				<Suspense fallback={<Loader />}>
					<Homepage />
				</Suspense>
			)}
		</div>
	);
}

export default App;
