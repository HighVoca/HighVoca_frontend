import { createBrowserRouter } from 'react-router';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    children:[
      {
        path:'/login',
        element: <Login/>, 
      },
    ]
  }
])

export default router;