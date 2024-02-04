// LoginPage.tsx

import React, { useState } from 'react';
import Modal from '../components/modal';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../slices/userSlice';

const LoginPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);


  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, []);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleReceiveEmail = () => {
    // Add your logic here to handle the "Receive Email" functionality
    // For now, just close the modal
    closeModal();
  };

  const handleLogin = () => {
    console.log(email, password)
    dispatch(login({ email, password }));
    navigate('/dashboard');
  };
  return (
    <div className='min-h-[80vh] flex items-center justify-center'>
      <div className='p-8 bg-white rounded-md shadow-lg w-96'>
        <h2 className='mb-6 text-2xl font-bold'>Login</h2>

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button className='bg-[#5E17EB] text-white px-4 py-2 rounded-full w-full' onClick={handleLogin}>
          Login
        </button>

        {/* Forgot Password Text */}
        <p className='mt-4 text-sm text-gray-600'>
          <button onClick={openModal} className='text-blue-500'>
            Forgot Password?
          </button>
        </p>
        {showModal && (
          <Modal
            closeModal={closeModal}
            email={email}
            handleEmailChange={handleEmailChange}
            handleReceiveEmail={handleReceiveEmail}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
