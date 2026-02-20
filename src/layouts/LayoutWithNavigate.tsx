import { Outlet } from 'react-router';
import NavigateBar from '../components/NavigateBar/NavigateBar';

const LayoutWithNavigate = () => {
  return(
    <>
      <Outlet />
      <NavigateBar />
    </>
  );
};

export default LayoutWithNavigate;