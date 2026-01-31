import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login/Login';
import Onboarding from '../pages/Onboarding/Onboarding';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/onboarding',
				element: <Onboarding />,
			},
		],
	},
]);

export default router;
