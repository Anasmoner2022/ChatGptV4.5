/**
 * Node Modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

/**
 * Loaders
 */
import RegisterLoader from '../routes/loader/registerLoder';
import LoginLoader from '../routes/loader/loginLoader';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
    loader: LoginLoader,
  },
  {
    path: '/register',
    element: <Register />,
    loader: RegisterLoader,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
]);

export default routes;
