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
import ResetLink from '../pages/ResetLink';
import ForgotPassword from '../pages/ForgotPassword';

/**
 * Loaders
 */
import RegisterLoader from '../routes/loader/registerLoder';
import LoginLoader from '../routes/loader/loginLoader';
import resetPasswordloader from './loader/ResetPasswordloader';
import forgotPasswordloader from './loader/forgotPasswordLoader';

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
    path: '/reset-link',
    element: <ResetLink />,
    loader: resetPasswordloader,
  },
  {
    path: '/reset-password',
    element: <ForgotPassword />,
    loader: forgotPasswordloader,
  }
]);

export default routes;
