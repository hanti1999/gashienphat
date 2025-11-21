'use client';

import { ReactNode, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
      onClick={onClose}
    >
      <div
        className='w-full max-w-md rounded-lg bg-white p-2 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='mb-4 flex items-center justify-between'>
          {title && <h2 className='text-lg font-semibold'>{title}</h2>}
          <button
            onClick={onClose}
            className='rounded px-2 text-gray-500 hover:bg-gray-100 cursor-pointer'
            aria-label='Close modal'
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};
