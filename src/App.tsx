import { RouterProvider } from 'react-router';
import router from './routes/Router';
import Style from './styles/Style';

function App() {
	return (
		<Style>
			<RouterProvider router={router} />
		</Style>
	);
}

export default App;
