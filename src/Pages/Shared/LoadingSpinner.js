import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div class="flex items-center justify-center ">
                <div class="w-30 h-30 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;