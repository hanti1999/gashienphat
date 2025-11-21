'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { Play } from 'lucide-react';

export default function ModalClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className='mt-5'>
      <button
        onClick={() => setOpen(true)}
        className='rounded ring ring-[#fb77c5] text-[#fb77c5] hover:bg-pink-100 transition-colors px-4 py-2 cursor-pointer flex items-center gap-2'
      >
        Xem video
        <Play size={16} />
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title='Video sản phẩm'
      >
        {children}
      </Modal>
    </div>
  );
}
