
import { useState, useEffect } from 'react';
import Loader from './pages/Loader';
import Homepage from './pages/Homepage';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	return (
			<div className="h-screen">{loading ? <Loader /> : <Homepage />}</div>
	);
}
export default App;
