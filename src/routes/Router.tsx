import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login/Login';
import Onboarding from '../pages/Onboarding/Onboarding';
import Main from '../pages/Main/Main';
import Study from '../pages/Study/Study';
import LayoutWithNavigate from '../layouts/LayoutWithNavigate';
import Mypage from '../pages/Mypage/Mypage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        {
          element: <LayoutWithNavigate />,
          children: [
            {
              path: '/main',
              element: <Main />,
            },
            {
              path: '/study',
              element: <Study />,
            },
            {
              path: '/mypage',
              element: <Mypage />,
            },
          ],
        },
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
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
