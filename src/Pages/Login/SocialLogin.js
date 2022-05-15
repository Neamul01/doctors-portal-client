import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSingin = async () => {
        await signInWithGoogle();
    }

    if (user) {
        console.log(user)
    }

    if (loading) {
        console.log("loading...")
    }

    if (error) {
        console.log(error)
    }

    return (
        <div className='w-full'>
            <button onClick={handleGoogleSingin} className="btn w-full btn-outline">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;