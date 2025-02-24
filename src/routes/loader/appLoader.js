/**
 * Node Modules
 */
import { redirect } from 'react-router';

/**
 *custom Modules
 */
import { account } from '../../lib/appwrite';

const appLoader = async () => {
  const data = {};

  try {
    // Attempt to retrieve the user's account information
    data.user = await account.get();
  } catch (error) {
    console.log(`Error retrieving user account: ${error.message}`);
    // If the user is not logged in, redirect to the login page
    return redirect('/login');
  }

  return data;
};

export default appLoader;
