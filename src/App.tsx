import { useState, useEffect, lazy } from 'react';
import './App.css';
import Loader from './pages/Loader';


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
		<div className="h-screen">{loading ? <Loader /> : <Homepage />}</div>
	);
}

export default App;
