import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/public/routes';

function App () {
	return (
		<div className="">
			<RouterProvider router={ router }></RouterProvider>
		</div>
	);
}

export default App;
