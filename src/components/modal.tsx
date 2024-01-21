import React from 'react';

interface ModalProps {
  closeModal: () => void;
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReceiveEmail: () => void;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  email,
  handleEmailChange,
  handleReceiveEmail,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='p-8 bg-white rounded-md shadow-md w-96'>
        <h2 className='mb-6 text-2xl font-bold'>Forgot Password</h2>
        <div className='mb-4'>
          <label
            htmlFor='forgot-email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='forgot-email'
            value={email}
            onChange={handleEmailChange}
            className='w-full p-2 mt-1 border rounded-md'
            placeholder='Enter your email'
          />
        </div>
        <button
          onClick={handleReceiveEmail}
          className='bg-[#5E17EB] text-white px-4 py-2 rounded-full w-full'
        >
          Receive Email
        </button>
        <button onClick={closeModal} className='mt-4 text-black'>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
