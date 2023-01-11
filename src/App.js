import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/public/routes';

function App() {
	return (
		<div className="max-w-[1365px] mx-auto">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
