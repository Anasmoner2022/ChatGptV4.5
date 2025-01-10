/**
 * Node Modules
 */
import { useNavigate } from 'react-router-dom';
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
import Button from '../components/Button';
import forgotPasswordSchema from '../schemas/forgotPasswordSchema';
import AuthNavbar from '../components/AuthNavbar';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const formFields = [
        {
              label: 'Password',
              name: 'password',
              type: 'password',
              placeholder: 'Enter Your New Password',
              rules: forgotPasswordSchema.shape?.password,
            },
    ];
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const url = new URL(window.location.href);
            console.log(data);

            // Create session for the new user
            await account.updateRecovery(
                url.searchParams.get('userId'),
                url.searchParams.get('secret'),
                data.password
            )

            toast.success('Password reset successful! You are now logged in.');

            navigate('/login');
        } catch (error) {
            toast.error(error.message);
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
                            Set a New Password
                        </h2>
                        <p className='mb-4 mt-1 px-2 text-center text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant'>
                            Please Enter a new password that you don&apos;t use anywhere else.
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
                                    autoFocus={field.name === 'password' ? true : false}
                                    placeholder={field.placeholder}
                                    rules={field.rules}
                                />
                            ))}
                            <PasswordStrengthMeter password={watch('password')} />

                            <Button
                                type='submit'
                                className='flex h-10 items-center justify-center rounded-full text-labelLarge transition-all duration-medium3 ease-standard hover:bg-light-primaryContainer hover:text-light-onPrimaryContainer hover:shadow-elevation2 focus:shadow-none dark:hover:bg-dark-primaryContainer dark:hover:text-dark-onPrimaryContainer dark:hover:shadow-elevation2 dark:focus:shadow-none'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Changing your password...' : 'Change Password'}
                            </Button>
                        </form>
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

export default ForgotPassword;
