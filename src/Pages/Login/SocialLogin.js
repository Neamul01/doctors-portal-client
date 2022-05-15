import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSingin = async () => {
        await signInWithGoogle();
    }
    let signinError;

    if (user) {
        console.log(user)
    }

    if (loading) {
        console.log("loading...")
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