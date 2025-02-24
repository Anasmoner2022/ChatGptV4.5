/**
 * Node Modules
 */
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';

/**
 * Custom Modules
 */
import { account } from '../lib/appwrite';

/**
 * Components
 */
import { Banner } from '../assets/assets';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import { Button } from '../components/Button';
import loginSchema from '../schemas/loginSchema';
import AuthNavbar from '../components/AuthNavbar';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter Your Email',
      rules: loginSchema.shape?.email,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter Your Password',
      rules: loginSchema.shape?.password,
    },
  ];
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      console.log(data);

      // Create session for the new user
      await account.createEmailPasswordSession(data.email, data.password);

      toast.success('Login successful! You are now logged in.');
      // Navigation logic can be added here
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);

      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageTitle title='Login to your account' />
      <ToastContainer
        position='top-right'
        autoClose={6000}
      />
      <div className='relative grid min-h-dvh grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <AuthNavbar />
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
              Welcome back to AstraMind
            </h2>
            <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
              Enter your AstraMind Account
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              {formFields.map((field, index) => (
                <FieldText
                  key={index}
                  label={field.label}
                  name={field.name}
                  register={register}
                  errors={errors}
                  type={field.type}
                  autoFocus={field.name === 'email' ? true : false}
                  placeholder={field.placeholder}
                  rules={field.rules}
                />
              ))}

              <p className='text-right text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                <Link
                  to={'/reset-link'}
                  className='link ms-1 inline-block text-light-onSurface dark:text-dark-onSurface'
                >
                  Forgot Password?
                </Link>
              </p>

              <Button
                type='submit'
                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : 'Login to your account'}
              </Button>
            </form>

            <p className='mt-4 text-center text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
              Don&apos;t have an account?
              <Link
                to={'/register'}
                className='link ms-1 inline-block text-labelLarge text-light-onSurface dark:text-dark-onSurface'
              >
                Create an account
              </Link>
            </p>
            {/* <div className='relative my-8 h-px w-full bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant'>
              <span className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-light-surface px-4 text-bodyMedium text-light-onSurfaceVariant dark:bg-dark-surface'>
                OR
              </span>
            </div> */}
            {/* <div className='mb-10 flex justify-center gap-5'>
              <Button
                variant='withIcon'
                className='' type='button'
              >
                <img
                  src={FacebookIcon}
                  alt='Facebook'
                  className='h-6 w-6'
                />
              </Button>
              <Button
                variant='withIcon'
                className='' type='button'
              >
                <img
                  src={GoogleIcon}
                  alt='Google'
                  className='h-6 w-6'
                />
              </Button>
              <Button
                variant='withIcon'
                className='' type='button'
              >
                <img
                  src={LinkedinIcon}
                  alt='Google'
                  className='h-6 w-6'
                />
              </Button>
            </div> */}
          </div>

          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant'>
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>
        <img
          src={Banner}
          alt=''
          className='hidden h-full w-full rounded-small object-cover lg:block'
        />
      </div>
    </>
  );
};

export default Login;
