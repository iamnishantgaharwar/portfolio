import './App.css';
import Homepage from './pages/Homepage';
import Lenis from 'lenis';
const lenis = new Lenis()

function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
	return (
		<>
			<div className=''>
				<Homepage />
			</div>
		</>
	);
}

export default App;
