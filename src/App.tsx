import { useState, useEffect, lazy } from 'react';
import Loader from './pages/Loader';
const AppRoute = lazy(() => import('./AppRoute'));

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	return (
		<div className="h-screen">
			{loading ? <Loader /> : <AppRoute />}
		</div>
	);
}
export default App;
