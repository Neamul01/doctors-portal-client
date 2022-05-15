import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import LoadingSpinner from '../Shared/LoadingSpinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSingin = async () => {
        await signInWithGoogle();
    }
    let signinError;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    if (error) {
        signinError = <p className='text-red-500 text-left'><small>{error?.message}</small></p>
    }

    return (
        <div className='w-full'>
            {signinError}
            <button onClick={handleGoogleSingin} className="btn w-full btn-outline">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;