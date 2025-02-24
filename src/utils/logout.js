/**
 * Custom Modules
 */
import { account } from '../lib/appwrite';

/**
 * Log out the current user by deleting their session and navigating to the login page.
 * @async
 * @function logout
 * @param {Function} navigate - The navigation function to redirect the user after logging out.
 * @returns {Promise<void>} - A promise that resolves when the user is logged out.
 * @throws {Error} - If there is an error deleting the user session.
 */
const logout = async (navigate) => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    return console.log(`Error deleting user session: ${error.message}`);
  }

  return navigate('/login');
};

export default logout;
