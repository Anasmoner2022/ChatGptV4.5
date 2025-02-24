/**
 * Node Modules
 */
import { redirect } from 'react-router';

/**
 *custom Modules
 */
import { account } from '../../lib/appwrite';

const forgotPasswordloader = async () => {
  const url = new URL(window.location.href);
  try {
    // Attempt to retrieve the user's account information
    await account.get();
    redirect('/');
  } catch {
    return null;
  }

  if (!url.searchParams.get('userId') || !url.searchParams.get('secret'))
    return redirect('/reset-link');

  return null;
};

export default forgotPasswordloader;
