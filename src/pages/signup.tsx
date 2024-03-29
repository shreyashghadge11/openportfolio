// SignupPage.tsx

import React from 'react';
import { useAppSelector } from '../store/hooks';

const SignupPage: React.FC = () => {
  const { error } = useAppSelector((state) => state.user);
  return (
    <div className='min-h-[80vh] flex items-center justify-center'>
      <div className='p-8 bg-white rounded-md shadow-lg w-96'>
        <h2 className='mb-6 text-2xl font-bold'>Signup</h2>

        {/* Email Input */}
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 mt-1 border rounded-md'
            placeholder='Enter your email'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Username
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 mt-1 border rounded-md'
            placeholder='Enter your Username'
          />
        </div>

        {/* Password Input */}
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 mt-1 border rounded-md'
            placeholder='Enter your password'
          />
        </div>

        {/* Login Button */}
        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button className='bg-[#5E17EB] text-white px-4 py-2 rounded-full w-full mt-2'>
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
