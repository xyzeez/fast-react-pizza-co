import { Outlet, useNavigate } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

export const AppLayout = () => {
  const navigation = useNavigate();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
