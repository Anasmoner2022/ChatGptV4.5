import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';

import { account } from '../lib/appwrite';

import { Banner } from '../assets/assets';
import PageTitle from '../components/PageTitle';
import FieldText from '../components/FieldText';
import Button from '../components/Button';
import resetSchema from '../schemas/resetSchema';
import AuthNavbar from '../components/AuthNavbar';
import { useNavigate } from 'react-router-dom';

const ResetLink = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter Your Email',
      rules: resetSchema.shape?.email,
    },
  ];

  const onSubmit = async (data) => {
    const email = data.email;
    setIsSubmitting(true);
    try {
      await account.createRecovery(email, `${window.location.origin}/reset-password`);
      toast.success('Password reset link sent to your email');

      navigate('/')
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageTitle title='Reset Password' />
      <ToastContainer
        position='top-right'
        autoClose={6000}
      />
      <div className='relative grid min-h-dvh grid-cols-1 p-2 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-2'>
          <AuthNavbar />
          <div className='mx-auto flex w-full max-w-[480px] flex-col gap-2'>
            <h2 className='text-center font-heading text-displaySmall font-semibold text-light-onBackground dark:text-light-onPrimary'>
              Forgot your Password?
            </h2>
            <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-light-onPrimary'>
              Enter your AstraMind Email and we will send you a link to reset your password
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

              <p className='text-left text-bodySmall text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                this link will be valid for 1 hour
              </p>

              <Button
                type='submit'
                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Email...' : ' Send Email'}
              </Button>
            </form>
          </div>

          <p className='mx-auto mt-auto text-bodyMedium text-light-onSurfaceVariant lg:mx-0 dark:text-dark-onSurfaceVariant'>
            &copy; 2024 WebHawks . All rights reserved
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

export default ResetLink;