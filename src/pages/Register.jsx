/**
 * Node Modules
 */
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';

/**
 * Custom Modules
 */
import { account } from '../lib/appwrite';
import generateID from '../utils/generateID';

/**
 * Components
 */
import {
  LinkedinIcon,
  EventoDark,
  EventoLight,
  FacebookIcon,
  GoogleIcon,
  Banner,
} from '../assets/assets';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import Button from '../components/Button';
import registerSchema from '../schemas/registerShema';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Create account
      const newAccount = await account.create(
        generateID(),
        data.email,
        data.password,
        data.fullName,
      );

      if (!newAccount) {
        throw new Error('Account creation failed');
      }

      // Create session for the new user
      await account.createEmailPasswordSession(data.email, data.password);

      toast.success('Registration successful! You are now logged in.');
      // Navigation logic can be added here
      // navigate('/home');
    } catch (error) {
      console.error('Registration/Login failed', error);

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
      <PageTitle title='Create an account' />
      <ToastContainer
        position='top-right'
        autoClose={6000}
      />
      <div className='relative grid min-h-dvh grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <Link
            to={'/'}
            className='mx-auto mb-auto w-16 max-w-max lg:mx-0'
          >
            <img
              src={EventoDark}
              className='hidden dark:block'
              alt='Dark Logo'
            />
            <img
              src={EventoLight}
              className='dark:hidden'
              alt='Dark Logo'
            />
          </Link>
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='font-heading text-displaySmall text-light-onBackground dark:text-light-onPrimary text-center font-semibold'>
              Create an account
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mb-4 mt-1 px-2 text-center'>
              Register Today and get access to all the features of our platform
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <FieldText
                label='Full Name'
                name='fullName'
                register={register}
                errors={errors}
                autoFocus={true}
                placeholder='Full name'
              />
              <FieldText
                label='Email'
                name='email'
                placeholder='Enter Your Email'
                register={register}
                errors={errors}
                type='email'
              />
              <FieldText
                label='Password'
                name='password'
                placeholder='Enter Your Password'
                register={register}
                errors={errors}
                type='password'
              />
              <PasswordStrengthMeter password={watch('password')} />
              <FieldText
                label='Confirm Password'
                name='confirmPassword'
                placeholder='Confirm Your Password'
                register={register}
                errors={errors}
                type='password'
              />
              <div className='flex max-w-md flex-col gap-4'>
                <label className='group flex cursor-pointer items-center space-x-3'>
                  <div className='relative flex items-center justify-center'>
                    <input
                      type='checkbox'
                      {...register('termsAccepted')}
                      className='peer sr-only'
                    />
                    <div className='border-dark-primary duration-medium1 ease-legacy peer-checked:bg-light-primary dark:border-light-primary dark:peer-checked:bg-dark-primary h-6 w-6 rounded-md border-2 transition-all'>
                      <svg
                        className='hidden h-4 w-4 fill-current text-white peer-checked:block'
                        viewBox='0 0 20 20'
                      >
                        <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                      </svg>
                    </div>
                  </div>
                  <span className='text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant flex-grow text-sm'>
                    I accept the{' '}
                    <Link
                      to='/terms'
                      className='inline-block hover:underline'
                    >
                      terms and conditions
                    </Link>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p
                    className='text-labelMedium text-light-error dark:text-dark-error pl-9 italic'
                    role='alert'
                  >
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                className='text-labelLarge duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 flex h-10 items-center justify-center rounded-full transition-all focus:shadow-none dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-4 text-center'>
              Already have an account?
              <Link
                to={'/login'}
                className='link text-light-onSurface dark:text-dark-onSurface ms-1 inline-block'
              >
                Log in
              </Link>
            </p>
            <div className='bg-light-onSurfaceVariant dark:bg-dark-onSurfaceVariant relative my-8 h-px w-full'>
              <span className='bg-light-surface text-bodyMedium text-light-onSurfaceVariant dark:bg-dark-surface absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform px-4'>
                OR
              </span>
            </div>
            <div className='mb-10 flex justify-center gap-5'>
              <Button
                variant='withIcon'
                className=''
                type='button'
              >
                <img
                  src={FacebookIcon}
                  alt='Facebook'
                  className='h-6 w-6'
                />
              </Button>
              <Button
                variant='withIcon'
                className=''
                type='button'
              >
                <img
                  src={GoogleIcon}
                  alt='Google'
                  className='h-6 w-6'
                />
              </Button>
              <Button
                variant='withIcon'
                className=''
                type='button'
              >
                <img
                  src={LinkedinIcon}
                  alt='Google'
                  className='h-6 w-6'
                />
              </Button>
            </div>
          </div>

          <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mx-auto mt-auto lg:mx-0'>
            &copy; 2024 WebHawks . All right reserved
          </p>
        </div>
        <img
          src={Banner}
          alt=''
          className='rounded-small h-full w-full object-cover'
        />
      </div>
    </>
  );
};

export default Register;
