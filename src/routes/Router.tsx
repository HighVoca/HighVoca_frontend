import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login/Login';
import Onboarding from '../pages/Onboarding/Onboarding';
import Main from '../pages/Main/Main';
import Study from '../pages/Study/Study';

const router = createBrowserRouter(
	[
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
				{
					path: '/main',
					element: <Main />,
				},
				{
					path: '/study',
					element: <Study />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	},
);

export default router;
